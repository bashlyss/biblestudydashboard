import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import GroupActions from '../actions/GroupActions';
import _ from 'lodash';

class GroupStore extends RESTStore {
    constructor() {
        super(GroupActions);

        this.bindListeners({
            handleFetchOne: GroupActions.ENABLE_GROUP,
            handleFetchOne: GroupActions.CLOSE_GROUP,
        })
    }

    static getFor(id) {
        return _.find(this.getState().objects, obj => obj.id == id) || {};
    }
}

export default dispatcher.createStore(GroupStore, 'GroupStore');
