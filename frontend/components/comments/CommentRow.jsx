import React from 'react';
import Radium from 'radium';

class CommentRow extends React.Component {
  get styles() {
    return {
      base: {
        listStyle: 'none',
        border: '2px solid #4b4e6d',
        padding: '10px',
        display: 'block',
        marginBottom: '10px',
        position: 'relative',
      },
      header: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
      description: {
        fontSize: '14px',
      },
      user: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        fontSize: '12px',
      },
    };
  }
  render() {
    return (
      <li style={this.styles.base}>
        <div style={this.styles.header}>{this.props.title}</div>
        <div style={this.styles.description}>{this.props.comment}</div>
        <div style={this.styles.user}>
              Posted by: {this.props.user.first_name} {this.props.user.last_name}
        </div>
      </li>
    );
  }
}

CommentRow.propTypes = {
  title: React.PropTypes.string.isRequired,
  comment: React.PropTypes.string.isRequired,
  user: React.PropTypes.shape({
    first_name: React.PropTypes.string.isRequired,
    last_name: React.PropTypes.string.isRequired,
  }).isRequired,
};

CommentRow.contextTypes = {
  router: React.PropTypes.object,
};

export default Radium(CommentRow);
