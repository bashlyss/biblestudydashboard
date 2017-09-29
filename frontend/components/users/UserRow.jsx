import React from 'react';
import Radium from 'radium';

class UserRow extends React.Component {
    get styles() {
        return {
            base: {
                listStyle: 'none',
                padding: '5px',
                display: 'block',
                borderBottom: '1px solid #a1a6b4',
            },
            header: {
                fontSize: '16px',
            },
            description: {
                fontSize: '12px',
            },
        };
    }
    render() {
        return (
          <li style={this.styles.base}>
            <div style={this.styles.header}>{this.props.name}</div>
            <div style={this.styles.description}>{this.props.email}</div>
          </li>
        );
    }
}

export default Radium(UserRow);
