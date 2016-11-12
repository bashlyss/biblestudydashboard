// Root page for all my dom stuff
import Cookies from 'js-cookie';
import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import GroupListContainer from './components/containers/GroupListContainer';
import GroupDetailContainer from './components/containers/GroupDetailContainer';
import NotFound from './components/error/NotFound';
import GroupBase from './components/groups/GroupBase';
import AddGroupPage from './components/groups/AddGroupPage';
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
      <Route path="addgroup/" component={AddGroupPage} />
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
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': Cookies.get('csrftoken'),
        },
    });
    ReactDOM.render(Routes, document.getElementById('main'));
});
