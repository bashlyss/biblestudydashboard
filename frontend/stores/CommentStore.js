import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import CommentActions from '../actions/CommentActions';
import _ from 'lodash';

class CommentStore extends RESTStore {
    constructor() {
        super(CommentActions);
    }
}

export default dispatcher.createStore(CommentStore, 'CommentStore');
