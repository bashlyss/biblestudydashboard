import React from 'react';
import Radium from 'radium';

@Radium
class UserRow extends React.Component {
    get styles() {
        return {
            base: {
                listStyle: 'none',
                padding: '5px',
                display: 'block',
            },
            header: {
                fontSize: '16px',
            },
            description: {
                fontSize: '12px',
            }
        };
    }
    render() {
        return (
          <li style={this.styles.base}>
            <div style={this.styles.header}>{this.props.name}</div>
            <div style={this.styles.description}>{this.props.email}</div>
          </li>
        )
    }
}

export default UserRow;
