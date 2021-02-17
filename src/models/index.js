import {types} from 'mobx-state-tree';

import {Auth} from './auth';
import {Gallery} from './gallery';
import {Loader} from './loader';

export const Store = types.model('Store', {
    auth: Auth,
    gallery: Gallery,
    loader: Loader
});
