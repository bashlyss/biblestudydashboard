import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import GroupActions from '../actions/GroupActions';
import _ from 'lodash';

class GroupStore extends RESTStore {
    constructor() {
        super(GroupActions);
    }

    static config = {
        onSerialize: function(data) {
            return _.merge({ groups: data.objects}, _.omit(data, ['objects']));
        }
    }
}

export default dispatcher.createStore(GroupStore, 'GroupStore');
