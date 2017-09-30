import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class DocActions extends RESTActions {
  constructor() {
    super('uploads/documents');
  }
}

export default dispatcher.createActions(DocActions);
