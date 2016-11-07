import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class DocActions extends RESTActions {
    constructor() {
        super('/docs/');
    }
}

export default dispatcher.createActions(DocActions);
