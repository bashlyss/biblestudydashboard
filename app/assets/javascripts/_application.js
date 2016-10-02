// Root page for all my dom stuff
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import NotFound from './components/error/NotFound';

class App extends React.Component {
    render() {
        return <h1>Test</h1>;
    }
}

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path=".*" component={NotFound} />
    </Route>
  </Router>
)

$(document).ready(function() {
    ReactDOM.render(Routes, document.getElementById('main'));
});
