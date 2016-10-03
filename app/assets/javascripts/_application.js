import 'babel-polyfill';
// Root page for all my dom stuff
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import NotFound from './components/error/NotFound';
import Login from './components/users/Login';

class App extends React.Component {
    render() {
        return <h1>Test</h1>;
    }
}

const Routes = (
  <Router history={browserHistory}>
    <Route path="/">
        <IndexRoute component={App} />
        <Route path="login/" component={Login} />
        <Route path=".*" component={NotFound} />
    </Route>
  </Router>
)

$(document).ready(function() {
    ReactDOM.render(Routes, document.getElementById('main'));
});
