import React from 'react';
import Radium from 'radium';

class SidebarLink extends React.Component {
    constructor() {
        super();
        this.navigate = this.navigate.bind(this);
    }
    get styles() {
        return {
            row: {
                padding: '10px',
                listStyle: 'none',
                borderBottom: '1px solid #ffffff',
                color: '#ffffff',
                textDecoration: 'none',
                cursor: 'pointer',
                ':hover': {
                    background: '#a1a6b4',
                    color: '#4b4e6d',
                    textDecoration: 'underline',
                },
            },
        };
    }
    navigate() {
        this.context.router.push(this.props.to);
    }
    render() {
        return (
          <li style={this.styles.row} onClick={this.navigate}>
            {this.props.name}
          </li>
        );
    }
}

SidebarLink.contextTypes = {
    router: React.PropTypes.object,
};

export default Radium(SidebarLink);
