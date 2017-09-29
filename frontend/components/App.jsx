import Cookies from 'js-cookie';
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Sidebar from './common/Sidebar';
import UserActions from '../actions/UserActions';

class App extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }
    get styles() {
        return {
            base: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                width: '100%',
                color: '#4b4e6d',
            },
            main: {
                display: 'table',
                width: '100%',
            },
            header: {
                position: 'relative',
                textAlign: 'center',
                textTransform: 'uppercase',
                padding: '20px',
                backgroundColor: '#a1a6b4',
            },
            body: {
                margin: '0 auto',
                padding: '20px',
                display: 'table-cell',
                width: 'calc(100% - 260px)',
            },
            button: {
                backgroundColor: '#84dcc6',
                color: '#4b4e6d',
                padding: '4px 8px',
                fontSize: '16px',
                position: 'absolute',
                right: '20px',
                top: '20px',
            },
        };
    }
    logout() {
        UserActions.logout(this.context.router);
    }
    render() {
        const loggedIn = !_.isUndefined(Cookies.get('authenticated'));
        return (
          <div style={this.styles.base}>
            <div style={this.styles.header}>
              <h1>My Group Study</h1>
              <h3>A place to share resources and discuss</h3>
              {loggedIn &&
              <button style={this.styles.button} onClick={this.logout}>Log Out</button>}
            </div>
            <div style={this.styles.main}>
              {loggedIn && <Sidebar />}
              <div style={this.styles.body}>{this.props.children}</div>
            </div>
          </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.node.isRequired,
};

App.contextTypes = {
    router: React.PropTypes.object,
};

export default Radium(App);
