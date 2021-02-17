import React from 'react';
import {inject, observer} from 'mobx-react';
import {Spinner} from 'react-bootstrap';

import './index.scss';


const LoaderStore = ({store}) => {
    const isVisible = store.loader.isVisible();

    return isVisible ? (
        <div className='loader'>
            <Spinner animation='border' variant='primary' />
        </div>
    ) : null;
};

export const Loader = inject('store')(observer (LoaderStore));
