import _ from 'lodash';
import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import GroupActions from '../actions/GroupActions';

class GroupStore extends RESTStore {
    constructor() {
        super(GroupActions);

        this.bindListeners({
            handleFetchOne: [GroupActions.ENABLE_GROUP, GroupActions.CLOSE_GROUP],
        });
    }

    static getFor(id) {
        return _.find(this.getState().objects, { id }) || {};
    }
}

export default dispatcher.createStore(GroupStore, 'GroupStore');
