import React from 'react';
import Radium from 'radium';
import $ from 'jquery';
import _ from 'lodash';
import UserRow from '../users/UserRow';
import SharedRow from '../shared/SharedRow';

@Radium
class GroupDashboard extends React.Component {
    componentDidMount() {
        $.get(
          _.replace('/groups/:id/', ':id', this.props.params.groupId), {},
          group => { this.setState(group) }
        );
    }
    get styles() {
        return {
            base: {
                display: 'flex',
            },
            users: {
                margin: 0,
                padding: '5px',
                borderTop: '1px solid #a1a6b4',
                color: '#0d0221',
            },
            shared: {
                margin: 0,
                padding: '5px',
            },
            column1: {
                flexGrow: 0,
            },
            column2: {
                flexGrow: 1,
            },
            header: {
                color: '#0d0221',
            },
            name: {
                textTransform: 'capitalize',
            }
        };
    }
    render() {
        return (
          <div>
            <div style={this.styles.header}>
              <h2 style={this.styles.name}>{this.state.name} Dashboard</h2>
              <h4>{this.state.description}</h4>
            </div>
            <div style={this.styles.base}>
              <div style={this.styles.column1}>
                <h5>Users</h5>
                <ul style={this.styles.users}>
                  {_.map(this.state.users, user => <UserRow key={user.id} {...user} />)}
                </ul>
              </div>
              <div style={this.styles.column2}>
                <h5>Shared Content</h5>
                <ul style={this.styles.shared}>
                  {_.map(this.state.docs, shared => (
                    <SharedRow
                      key={'doc-'+ shared.id}
                      groupId={this.props.params.groupId}
                      type="document"
                      {...shared}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default GroupDashboard;
