import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import DocActions from '../actions/DocActions';
import _ from 'lodash';

class DocStore extends RESTStore {
    constructor() {
        super(DocActions);
    }
}

export default dispatcher.createStore(DocStore, 'DocStore');
