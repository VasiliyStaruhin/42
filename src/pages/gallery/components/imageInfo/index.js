import React, {useState, useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {Image, Button} from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'


export const ImageInfoWithoutStore = ({store}) => {
    const selectedPictureId = store.gallery.getSelectedPictureId();
    const [pictureInfo, setPictureInfo] = useState({});
    const {full_picture: src, author, camera, tags} = pictureInfo;

    useEffect(() => {
        store.gallery
            .getImageInfo()
            .then(setPictureInfo)
    }, [selectedPictureId]);

    const keyUpHandler = event => {

        switch (event.key) {
            case 'ArrowLeft':
                store.gallery.getPreviousPicture();
                break;
            case 'ArrowRight':
                store.gallery.getNextPicture();
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);

    return pictureInfo ? <div>
        <Zoom>
            <Image src={src} className='w-100 mb-3' />
        </Zoom>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Camera:</strong> {camera}</p>
        <p><strong>Tags:</strong> {tags}</p>
        <Button variant='outline-primary' onClick={() => navigator.clipboard.writeText(src)}>Copy to clipboard!</Button>
    </div> : null;
};

export const ImageInfo = inject('store')(observer (ImageInfoWithoutStore));
