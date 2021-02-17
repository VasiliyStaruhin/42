import React, {useEffect, useState} from 'react';
import {inject, observer} from 'mobx-react';
import {Row, Col, Image, Modal} from 'react-bootstrap';

import {Pagination} from 'src/ui/molecules';
import {DefaultPageTemplate} from 'src/ui/templates';

import {ImageInfo} from './components';

import './index.scss';


const GalleryPageWithoutStore = ({store}) => {
    const [activePage, setActivePage] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const pageCount = store.gallery.getPageCount();

    useEffect(() => {
        store.gallery
            .fetchImages(activePage)
            .then(setPictures);
    }, [activePage]);

    const renderPictures = () => {
        return <Row>
            {pictures.map(({cropped_picture: src, id}) => {
                return <Col lg={4} sm={6} xs={12} key={id}>
                    <div className='image-wrapper' onClick={() => {
                        store.gallery.setSelectedPictureId(id);
                        setModalShow(true);
                    }}>
                        <Image src={src} />
                    </div>
                </Col>;
            })}
        </Row>
    };

    return <DefaultPageTemplate>
        <Row className='my-5'>
            <Col>
                <h2>Gallery page</h2>
            </Col>
        </Row>

        {renderPictures()}

        <Row className='my-5'>
            <Col>
                <Pagination onChange={setActivePage} pageCount={pageCount} />
            </Col>
        </Row>

        <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Body>
                <ImageInfo />
            </Modal.Body>
        </Modal>
    </DefaultPageTemplate>
};

export const GalleryPage = inject('store')(observer (GalleryPageWithoutStore));
