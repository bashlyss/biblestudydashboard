import React from 'react';
import _ from 'lodash';

import DocumentCommentActions from '../../actions/DocumentCommentActions';

import AddCommentForm from '../comments/AddCommentForm';
import CommentRow from '../comments/CommentRow';

class ViewDocument extends React.Component {
    constructor() {
        super();
        this.onSubmitComment = this.onSubmitComment.bind(this);
    }
    onSubmitComment(data) {
        data.document = this.props.doc.id; // eslint-disable-line no-param-reassign
        DocumentCommentActions.create(data);
    }
    render() {
        return (
          <div>
            <h2>
              <a href={this.props.doc.document} target="_blank" rel="noopenner noreferrer">
                {this.props.doc.title}
              </a>
            </h2>
            <h4>{this.props.doc.description}</h4>
            <ul>
              {_.map(this.props.comments, comment => <CommentRow key={comment.id} {...comment} />)}
            </ul>
            <AddCommentForm
              onSubmit={this.onSubmitComment}
            />
          </div>
        );
    }
}

export default ViewDocument;
