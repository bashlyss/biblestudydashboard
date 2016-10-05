import React from 'react';
import Radium from 'radium';
import $ from 'jquery';
import _ from 'lodash';
import UserRow from '../users/UserRow';

@Radium
class GroupDashboard extends React.Component {
    componentDidMount() {
        $.get(
          _.replace('/groups/:id/', ':id', this.props.params.id), {},
          group => { this.setState(group) }
        );
    }
    get styles() {
        return {
            base: {
            },
            users: {
                display: 'inline-block',
                padding: '5px',
                background: '#a1a6b4',
                color: '#0d0221',
            }
        };
    }
    render() {
        return (
          <div style={this.styles.base}>
            <ul style={this.styles.users}>
              {_.map(this.state.users, user => <UserRow key={user.id} {...user} />)}
            </ul>
          </div>
        );
    }
}

export default GroupDashboard;
