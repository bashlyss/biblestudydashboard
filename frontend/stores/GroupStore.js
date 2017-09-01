import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import GroupActions from '../actions/GroupActions';
import _ from 'lodash';

class GroupStore extends RESTStore {
    constructor() {
        super(GroupActions);
    }

    static getFor(id) {
        return _.find(this.getState().objects, obj => obj.id == id) || {};
    }
}

export default dispatcher.createStore(GroupStore, 'GroupStore');
