import dispatcher from '../dispatcher/Dispatcher';
import axios from 'axios';
import _ from 'lodash';

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
            axios.get(this.baseRoute).then(
                response => { this.update(response.data); }
            ).catch(
                errorMessage  => { this.failed(errorMessage); }
            );
        }
    }

    create(data) {
        return (dispatch) => {
            dispatch();
            axios.post(this.baseRoute, data).then(
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
