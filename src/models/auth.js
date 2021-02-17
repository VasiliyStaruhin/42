import {types, flow} from 'mobx-state-tree';

import axios from 'src/utils/axios';
import {API_KEY} from 'src/utils/constants';


export const Auth = types.model('Auth', {
    token: types.string,
    auth: types.optional(types.boolean, false),
    pending: types.optional(types.boolean, false)
})
    .actions(self => {
        const signIn = flow(function* () {

            if (!self.pending) {
                self.pending = true;

                try {
                    const {data: {auth, token}} = yield axios.post('http://interview.agileengine.com/auth', {
                        apiKey: API_KEY
                    });

                    self.auth = auth;
                    self.token = token;
                    self.pending = false;
                } catch (error) {
                    self.pending = false;
                }
            }

                return false;
            });

        return {signIn};
    })
    .views(self => ({
        isAuthorized() {
            return self.auth;
        }
    }));
