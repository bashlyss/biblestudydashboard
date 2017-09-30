import _ from 'lodash';
import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import DocumentCommentActions from '../actions/DocumentCommentActions';
import DocActions from '../actions/DocActions';

class DocumentCommentStore extends RESTStore {
  constructor() {
    super(DocumentCommentActions);

    this.byDocument = {};

    this.bindListeners({
      handleUpdateFromDocument: DocActions.UPDATE,
      handleUpdateForDocuments: DocumentCommentActions.ADD_ONE,
    });
  }

  handleUpdateFromDocument(documents) {
    this.byDocument = _.zipObject(_.map(documents, 'id'), _.map(documents, 'comments'));
  }

  handleUpdateForDocuments(comment) {
    this.byDocument[comment.document].push(comment.id);
  }

  static getForDocument(documentId) {
    const state = this.getState();
    return _.pick(state.objects, state.byDocument[documentId]);
  }
}

export default dispatcher.createStore(DocumentCommentStore, 'DocumentCommentStore');
