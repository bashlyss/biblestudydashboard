import _ from 'lodash';
import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import UserActions from '../actions/UserActions';
import GroupActions from '../actions/GroupActions';

class UserStore extends RESTStore {
  constructor() {
    super(UserActions);

    this.byGroup = {};

    this.bindListeners({
      handleUpdateFromGroup: GroupActions.UPDATE,
    });
  }

  handleUpdateFromGroup(groups) {
    this.byGroup = _.zipObject(_.map(groups, 'id'), _.map(groups, 'users'));
  }

  static getForGroup(groupId) {
    const state = this.getState();
    return _.pick(state.objects, state.byGroup[groupId]);
  }
}

export default dispatcher.createStore(UserStore, 'UserStore');
