import React from 'react';
import Radium from 'radium';

class GroupHeaderLink extends React.Component {
    constructor() {
        super();
        this.navigate = this.navigate.bind(this);
    }
    get styles() {
        return {
            row: {
                padding: '10px',
                listStyle: 'none',
                color: '#0d0221',
                textDecoration: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                marginRight: '20px',
                ':hover': {
                    background: '#ffffff',
                    textDecoration: 'underline',
                },
            },
        };
    }
    navigate() {
        if (this.props.to) {
            this.context.router.push(this.props.to);
        } else if (this.props.action) {
            this.props.action(this.props.id);
        }
    }
    render() {
        return (
          <div style={this.styles.row} onClick={this.navigate}>
            {this.props.name}
          </div>
        );
    }
}

GroupHeaderLink.contextTypes = {
    router: React.PropTypes.object,
};

export default Radium(GroupHeaderLink);
