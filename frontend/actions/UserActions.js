import axios from 'axios';
import { stringify } from 'qs';
import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';
import SessionActions from './SessionActions';

class UserActions extends RESTActions {
    constructor() {
        super('users');
    }

    login(data, router) {
        return (dispatch) => {
            dispatch();
            axios.post(`${this.baseRoute}login/`, stringify(data)).then(
                (response) => {
                    SessionActions.setUser(response.data.id);
                    router.push('/');
                },
            );
        };
    }

    logout(router) {
        return (dispatch) => {
            dispatch();
            axios.post(`${this.baseRoute}logout/`).then(
                () => {
                    SessionActions.unsetUser();
                    router.push('/login/');
                },
            );
        };
    }
}

export default dispatcher.createActions(UserActions);
