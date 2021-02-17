import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';

import {DefaultPageTemplate} from 'src/ui/templates';
import {Col, Row} from "react-bootstrap";


export const NotFoundPage = () => {
    return <DefaultPageTemplate>
        <Row className='my-5'>
            <Col className='d-flex justify-content-center'>
                <Image src='https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg' />
            </Col>
        </Row>
        <Row className='my-5'>
            <Col className='d-flex justify-content-center'>
                <Link to='/' >Go home</Link>
            </Col>
        </Row>
    </DefaultPageTemplate>
};
