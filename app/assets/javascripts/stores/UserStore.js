import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import UserActions from '../actions/UserActions';
import GroupActions from '../actions/GroupActions';
import _ from 'lodash';

class UserStore extends RESTStore {
    constructor() {
        super(UserActions);
        this.bindListeners({
            handleUpdateFromGroup: GroupActions.UPDATE,
        });
    }

    handleUpdateFromGroup(groups) {
        this.objects = _.uniq(_.flatten(_.map(groups, group => group.users)));
    }

    static config = {
        onSerialize: function(data) {
            return _.merge({ users: data.objects}, _.omit(data, ['objects']));
        }
    }
}

export default dispatcher.createStore(UserStore, 'UserStore');
