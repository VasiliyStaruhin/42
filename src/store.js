import {Store} from './models/index';


export const store = Store.create({
    auth: {
        token: ''
    },
    gallery: {
        page: 1,
        pageCount: 1,
        pictures: {},
        selectedPictureId: '',
        picturesInfo: {}
    },
    loader: {
        count: 0
    }
});
