import dispatcher from '../dispatcher/Dispatcher';
import axios from 'axios';
import _ from 'lodash';

class RESTActions {
    constructor(baseRoute) {
        this.baseRoute = baseRoute;
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

    create() {
        return (dispatch) => {
            dispatch();
            axios.post(this.baseRoute).then(
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
