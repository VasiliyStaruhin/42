import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {DefaultPageTemplate} from 'src/ui/templates';


export const PublicHomePage = () => {
    return <DefaultPageTemplate>
        <Row className='my-5'>
            <Col>
                <h2>Default public home page</h2>
                <p>Please authorize</p>
            </Col>
        </Row>
    </DefaultPageTemplate>
};