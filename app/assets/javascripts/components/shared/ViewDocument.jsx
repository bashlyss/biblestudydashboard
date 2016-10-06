import React from 'react';
import Radium from 'radium';
import AddCommentForm from '../comments/AddCommentForm';
import CommentRow from '../comments/CommentRow';
import $ from 'jquery';
import _ from 'lodash';

@Radium
class ViewDocument extends React.Component {
    componentDidMount() {
        let url = '/groups/:groupId/docs/:id';
        url = _.replace(url, ':groupId', this.props.params.groupId);
        url = _.replace(url, ':id', this.props.params.id);
        $.get(url, {}, doc => { this.setState(doc) });
    }
    get url() {
        return _.replace('/docs/:id', ':id', this.props.params.id)
    }
    get styles() {
        return {
            base: {
            },
        };
    }
    addRow(comment) {
        if (comment) {
            this.setState({
                comments: _.concat(this.state.comments, comment),
            })
        }
    }
    render() {
        return (
          <div style={this.styles.base}>
            <h2>
              <a href={this.url} target="_blank" rel="noopenner noreferrer">
                {this.state.title}
              </a>
            </h2>
            <h4>{this.state.description}</h4>
            <ul>
              {_.map(this.state.comments, comment => <CommentRow key={comment.id} {...comment} />)}
            </ul>
            <AddCommentForm
              type="Doc"
              parentId={this.props.params.id}
              updateAfterAdd={this.addRow.bind(this)}
            />
          </div>
        );
    }
}

export default ViewDocument;
