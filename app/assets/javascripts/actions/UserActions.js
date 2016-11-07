import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class UserActions extends RESTActions {
    constructor() {
        super('/users/');
    }
}

export default dispatcher.createActions(UserActions);
