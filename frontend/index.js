// Root page for all my dom stuff
import Cookies from 'js-cookie';
import React from 'react';
import axios from 'axios';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import GroupListContainer from './components/containers/GroupListContainer';
import GroupDetailContainer from './components/containers/GroupDetailContainer';
import AddGroupContainer from './components/containers/AddGroupContainer';
import NotFound from './components/error/NotFound';
import GroupBase from './components/groups/GroupBase';
import ViewDocument from './components/shared/ViewDocument';
import UploadDocument from './components/shared/UploadDocument';
import Login from './components/users/Login';
import Signup from './components/users/Signup';
import $ from 'jquery';


const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GroupListContainer} />
      <Route path="login/" component={Login} />
      <Route path="signup/" component={Signup} />
      <Route path="addgroup/" component={AddGroupContainer} />
      <Route path="mygroups/">
        <IndexRedirect to="/" />
        <Route path=":groupId/" component={GroupBase}>
          <IndexRoute component={GroupDetailContainer} />
          <Route path="document/">
            <IndexRoute component={UploadDocument} />
            <Route path=":id/" component={ViewDocument} />
          </Route>
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

$(document).ready(function() {
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    ReactDOM.render(Routes, document.getElementById('main'));
});
