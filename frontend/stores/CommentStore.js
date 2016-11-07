import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import CommentActions from '../actions/CommentActions';
import _ from 'lodash';

class CommentStore extends RESTStore {
    constructor() {
        super(CommentActions);
    }

    static config = {
        onSerialize: function(data) {
            return _.merge({ comments: data.objects}, _.omit(data, ['objects']));
        }
    }
}

export default dispatcher.createStore(CommentStore, 'CommentStore');
