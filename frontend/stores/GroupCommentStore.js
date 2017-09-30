import _ from 'lodash';
import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import GroupCommentActions from '../actions/GroupCommentActions';
import GroupActions from '../actions/GroupActions';

class GroupCommentStore extends RESTStore {
  constructor() {
    super(GroupCommentActions);

    this.byGroup = {};

    this.bindListeners({
      handleUpdateFromGroup: GroupActions.UPDATE,
      handleUpdateForGroups: GroupCommentActions.ADD_ONE,
    });
  }

  handleUpdateFromGroup(groups) {
    this.byGroup = _.zipObject(_.map(groups, 'id'), _.map(groups, 'comments'));
  }

  handleUpdateForGroups(comment) {
    this.byGroup[comment.group].push(comment.id);
  }

  static getForGroup(groupId) {
    const state = this.getState();
    return _.pick(state.objects, state.byGroup[groupId]);
  }
}

export default dispatcher.createStore(GroupCommentStore, 'GroupCommentStore');
