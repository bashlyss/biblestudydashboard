import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class GroupCommentActions extends RESTActions {
  constructor() {
    super('comments/groups');
  }
}

export default dispatcher.createActions(GroupCommentActions);
