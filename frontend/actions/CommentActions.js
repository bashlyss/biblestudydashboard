import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class CommentActions extends RESTActions {
    constructor() {
        super('/comments/');
    }
}

export default dispatcher.createActions(CommentActions);
