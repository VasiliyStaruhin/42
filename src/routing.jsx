import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {GalleryPage, NotFoundPage, PublicHomePage} from 'src/pages';


export const Routing = ({isAuthorized = true}) => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                {isAuthorized ? <GalleryPage /> : <PublicHomePage />}
            </Route>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);