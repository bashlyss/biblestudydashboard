/* globals FormData */
import axios from 'axios';
import { stringify } from 'qs';

class RESTActions {
    constructor(baseRoute) {
        this.baseRoute = `/api/${baseRoute}/`;
    }

    update(objects) {
        return objects;
    }

    fetch() {
        return (dispatch) => {
            dispatch();
            return axios.get(this.baseRoute).then(
                (response) => { this.update(response.data); },
            ).catch(
                (errorMessage) => { this.failed(errorMessage); },
            );
        };
    }

    fetchOne(id) {
        return (dispatch) => {
            dispatch(id);
            return axios.get(`${this.baseRoute}${id}/`).then(
                (response) => { this.addOne(response.data); },
            ).catch(
                (errorMessage) => { this.failed(errorMessage); },
            );
        };
    }

    create(data) {
        return (dispatch) => {
            dispatch();
            let postData = stringify(data, { arrayFormat: 'repeat' });
            if (data instanceof FormData) {
                postData = data;
            }
            return axios.post(this.baseRoute, postData).then(
                (response) => { this.addOne(response.data); },
            ).catch(
                (errorMessage) => { this.failed(errorMessage); },
            );
        };
    }

    addOne(object) {
        return object;
    }

    failed(errorMessage) {
        return errorMessage;
    }
}

export default RESTActions;
