import React, {useState, Fragment} from 'react';
import {Modal as ModalBootstrap} from 'react-bootstrap';


export const Modal = ({toggleComponent, content}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <div onClick={handleShow}>
                {toggleComponent}
            </div>

            <ModalBootstrap show={show} onHide={handleClose}>
                <ModalBootstrap.Body>
                    {content}
                </ModalBootstrap.Body>
            </ModalBootstrap>
        </Fragment>
    );

};
