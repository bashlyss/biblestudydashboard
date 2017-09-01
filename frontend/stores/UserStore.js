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
        this.handleUpdate(_.uniq(_.flatten(_.map(groups, group => group.users))));
    }
}

export default dispatcher.createStore(UserStore, 'UserStore');
