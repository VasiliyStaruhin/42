import React from 'react';
import {Container} from 'react-bootstrap';

import {Header, Footer} from 'src/ui/organisms';

import './index.scss';


export const DefaultPageTemplate = ({children, header = true, footer = true}) => {

    return <div className='default-page-template'>
        {header && <Header />}
        <Container>
            {children}
        </Container>
        {footer && <Footer />}
    </div>
};
