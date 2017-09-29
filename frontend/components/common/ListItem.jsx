import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

class ListItem extends React.Component {
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
            disabled: {
                border: '2px solid rgba(75, 78, 109, 0.2)',
                color: 'rgba(75, 78, 109, 0.6)',
                ':hover': {
                    border: '2px solid rgb(75, 78, 109)',
                    color: 'rgb(75, 78, 109)',
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
            },
        };
    }
    viewGroup() {
        this.context.router.push(_.replace('/mygroups/{}/', '{}', this.props.id));
    }
    render() {
        return (
          <li
            style={[this.styles.base, !this.props.active && this.styles.disabled]}
            onClick={this.viewGroup}
          >
            <div style={this.styles.header}>{this.props.name}</div>
            <div style={this.styles.description}>{this.props.description}</div>
          </li>
        );
    }
}
ListItem.contextTypes = {
    router: React.PropTypes.object,
};

export default Radium(ListItem);
