// Root page for all my dom stuff
import React from 'react';
import Radium from 'radium';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import NotFound from './components/error/NotFound';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import $ from 'jquery';

@Radium
class App extends React.Component {
    get styles() {
        return {
            base: {
                fontFamily: 'Arial, Helvetica, sans-serif',
                width: '100%',
                color: '#4b4e6d',
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
        }
    }
    logout() {
        $.post('/logout', {}, success => {
            if (success) {
                window.location.href = '/login/';
            }
        });
    }
    render() {
        return (
          <div style={this.styles.base}>
            <div style={this.styles.header}>
              <h1>My Bible Study</h1>
              <h3>A place to share resources and discuss interesting passages</h3>
              {$('#context').length > 0 &&
              <button style={this.styles.button} onClick={this.logout.bind(this)}>Log Out</button>}
            </div>
            <div style={this.styles.body}>{this.props.children}</div>
          </div>
        );
    }
}
App.contextTypes = {
    router: React.PropTypes.object,
};

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="login/" component={Login} />
        <Route path="signup/" component={Signup} />
        <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
        },
    });
    ReactDOM.render(Routes, document.getElementById('main'));
});
