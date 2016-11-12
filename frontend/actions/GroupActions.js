import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class GroupActions extends RESTActions {
    constructor() {
        super('groups');
    }
}

export default dispatcher.createActions(GroupActions);
