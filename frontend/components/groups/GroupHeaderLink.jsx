import React from 'react';
import Radium from 'radium';
import $ from 'jquery';

@Radium
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
                    textDecoration: 'underline'
                },
            },
        };
    }
    navigate() {
        if (!this.props.api) {
            this.context.router.push(this.props.to);
        } else {
            $.ajax({
                url: this.props.to,
                type: this.props.type,
                success: this.props.onComplete,
                data: this.props.data,
            });
        }
    }
    render() {
        return (
          <div style={this.styles.row} onClick={this.navigate}>
            {this.props.name}
          </div>
        )
    }
}

GroupHeaderLink.contextTypes = {
    router: React.PropTypes.object,
}

export default GroupHeaderLink;
