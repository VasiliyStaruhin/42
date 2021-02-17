import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import {observer, inject} from 'mobx-react';

import './index.scss';


const HeaderWithoutStore = ({store}) => {
    const {auth} = store;

    return <header className='header'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <div className='logo' onClick={() => window.open('https://youtu.be/DLzxrzFCyOs?t=43', '_blank')} />
                    {!auth.isAuthorized() && <Button variant='outline-primary' type='button' size='sm' onClick={() => auth.signIn()}>auth</Button>}
                </Col>
            </Row>
        </Container>
    </header>
};

export const Header = inject('store')(observer (HeaderWithoutStore));

