import {types, flow, getParent} from 'mobx-state-tree';

import axios from 'src/utils/axios';


const Picture = types.model('Picture', {
    id: types.identifier,
    cropped_picture: types.string
});

const PictureInfo = types.model('PictureInfo', {
    author: types.string,
    camera: types.string,
    cropped_picture: types.string,
    full_picture: types.string,
    id: types.identifier,
    tags: types.string
});

export const Gallery = types.model('Gallery', {
    page: types.number,
    pageCount: types.number,
    pictures: types.optional(types.map(types.array(Picture)), {}),
    selectedPictureId: types.string,
    picturesInfo: types.optional(types.map(types.array(PictureInfo)), {}),

})
    .actions(self => {
        const fetchImages = flow(function* (activePage) {

            if (!self.pictures[activePage]) {
                self.pending = true;

                try {
                    const {data} = yield axios.get(`http://interview.agileengine.com/images?page=${activePage}`, {
                        headers: {
                            Authorization: getParent(self).auth.token
                        }
                    });
                    const {page, pageCount, pictures} = data;

                    self.page = page;
                    self.pageCount = pageCount;
                    self.pictures[page] = pictures;

                    return pictures;
                } catch (error) {
                    console.warn(error);
                }
            }

            return self.pictures[activePage];
        });

        const getImageInfo = flow(function* () {

            if (!self.picturesInfo[self.selectedPictureId]) {
                try {
                    const {data} = yield axios.get(`http://interview.agileengine.com/images/${self.selectedPictureId}`, {
                        headers: {
                            Authorization: getParent(self).auth.token
                        }
                    });

                    self.picturesInfo[self.selectedPictureId] = data;

                    return data;
                } catch (error) {
                    console.warn(error);
                }
            }

            return self.picturesInfo[self.selectedPictureId];
        });

        const setSelectedPictureId = id => {
            self.selectedPictureId = id;
        };

        const getPreviousPicture = () => {
            const index = self.pictures[self.page].findIndex(({id}) => id === self.selectedPictureId);

            index > 0 && setSelectedPictureId(self.pictures[self.page][index - 1].id);
        };

        const getNextPicture = () => {
            const index = self.pictures[self.page].findIndex(({id}) => id === self.selectedPictureId);

            index < self.pictures[self.page].length - 1 && setSelectedPictureId(self.pictures[self.page][index + 1].id);
        };

        return {fetchImages, getImageInfo, setSelectedPictureId, getPreviousPicture, getNextPicture};
    })
    .views(self => ({
        getPageCount() {
            return self.pageCount;
        },
        getSelectedPictureId() {
            return self.selectedPictureId;
        }
    }));