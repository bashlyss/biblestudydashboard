import dispatcher from '../dispatcher/Dispatcher';
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
                response => { this.update(response.data); }
            ).catch(
                errorMessage  => { this.failed(errorMessage); }
            );
        }
    }

    fetchOne(id) {
        return (dispatch) => {
            dispatch(id);
            return axios.get(`${this.baseRoute}${id}/`).then(
                response => { this.addOne(response.data); }
            ).catch(
                errorMessage => { this.failed(errorMessage); }
            );
        }
    }

    create(data) {
        console.log(data);
        return (dispatch) => {
            dispatch();
            return axios.post(this.baseRoute, stringify(data, { arrayFormat: 'repeat' })).then(
                response => { this.addOne(response.data); }
            ).catch(
                errorMessage => { this.failed(errorMessage); }
            );
        }
    }

    addOne(object) {
        return object;
    }

    failed(errorMessage) {
        return errorMessage;
    }
}

export default RESTActions;
