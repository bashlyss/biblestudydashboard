import React from 'react';
import AltContainer from 'alt-container';
import DocStore from '../../stores/DocStore';
import DocumentCommentStore from '../../stores/DocumentCommentStore';
import ViewDocument from '../shared/ViewDocument';

const DocumentContainer = props =>
  (<AltContainer
    id={props.params.id}
    stores={{
      doc: sprops => ({
          store: DocStore,
          value: DocStore.getFor(sprops.id),
      }),
      comments: sprops => ({
          store: DocumentCommentStore,
          value: DocumentCommentStore.getForDocument(sprops.id),
      }),
    }}
  >
    <ViewDocument />
  </AltContainer>);

export default DocumentContainer;
