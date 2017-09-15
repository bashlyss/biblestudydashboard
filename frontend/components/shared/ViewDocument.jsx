import React from 'react';
import Radium from 'radium';
import AddCommentForm from '../comments/AddCommentForm';
import CommentRow from '../comments/CommentRow';
import _ from 'lodash';

class ViewDocument extends React.Component {
    addRow(comment) {
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
              type="doc"
              parentId={this.props.doc.id}
              updateAfterAdd={this.addRow.bind(this)}
            />
          </div>
        );
    }
}

export default ViewDocument;
