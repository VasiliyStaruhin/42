import axios from 'axios';

import {store} from 'src/store';


class Axios {
    baseAxios;

    constructor() {
        this.baseAxios = axios.create({
            headers: {
                'Content-Type': 'application/json'
            },
            data: {}
        });

        this.baseAxios.interceptors.request.use(config => {
            store.loader.show();

            return config;
        }, error => Promise.reject(error));

        this.baseAxios.interceptors.response.use((response) => {
            store.loader.hide();

            return response;
        }, error => Promise.reject(error));
    }

    get(url, config) {
        return this.baseAxios.get(url, config);
    }

    post(url, data= {}, config) {
        return this.baseAxios.post(url, data, config);
    }

}

export default new Axios();
