import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
class SharedRow extends React.Component {
    constructor() {
        super();
        this.viewItem = this.viewItem.bind(this);
    }
    get styles() {
        return {
            base: {
                cursor: 'pointer',
                listStyle: 'none',
                border: '2px solid #4b4e6d',
                padding: '10px',
                display: 'block',
                marginBottom: '10px',
                ':hover': {
                    background: '#a1a6b4',
                },
            },
            header: {
                fontSize: '20px',
                display: 'inline-block',
                width: '40%',
            },
            description: {
                fontSize: '14px',
                display: 'inline-block',
            }
        };
    }
    viewItem() {
        let url = '/mygroups/:groupId/:shareType/:shareId/';
        url = _.replace(url, ':groupId', this.props.groupId);
        url = _.replace(url, ':shareType', this.props.type);
        url = _.replace(url, ':shareId', this.props.id);
        this.context.router.push(url);
    }
    render() {
        return (
          <li style={this.styles.base} onClick={this.viewItem}>
            <div style={this.styles.header}>{this.props.title}</div>
            <div style={this.styles.description}>{this.props.description}</div>
          </li>
        );
    }
}
SharedRow.contextTypes = {
    router: React.PropTypes.object,
}

export default SharedRow;
