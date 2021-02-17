import React from 'react';
import {observer, inject, Provider} from 'mobx-react';

import {Loader} from 'src/ui/atoms';
import {Routing} from 'src/routing';

import './index.scss';


const App = ({store}) => {
    const isAuthorized = store.auth.isAuthorized();

    return (
        <Provider store={store}>
            <Routing isAuthorized={isAuthorized} />
            <Loader />
        </Provider>
    );
};

export default inject('store')(observer (App));
