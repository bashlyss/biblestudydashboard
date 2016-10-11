import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import DocActions from '../actions/DocActions';
import _ from 'lodash';

class DocStore extends RESTStore {
    constructor() {
        super(DocActions);
    }

    static config = {
        onSerialize: function(data) {
            return _.merge({ docs: data.objects}, _.omit(data, ['objects']));
        }
    }
}

export default dispatcher.createStore(DocStore, 'DocStore');
