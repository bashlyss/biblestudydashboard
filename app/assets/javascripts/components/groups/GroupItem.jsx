import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
class GroupItem extends React.Component {
    constructor() {
        super();
        this.viewGroup = this.viewGroup.bind(this);
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
    viewGroup() {
        this.context.router.push(_.replace('/mygroups/{}/', '{}', this.props.id));
    }
    render() {
        return (
          <li style={this.styles.base} onClick={this.viewGroup}>
            <div style={this.styles.header}>{this.props.name}</div>
            <div style={this.styles.description}>{this.props.description}</div>
          </li>
        );
    }
}
GroupItem.contextTypes = {
    router: React.PropTypes.object,
}

export default GroupItem;
