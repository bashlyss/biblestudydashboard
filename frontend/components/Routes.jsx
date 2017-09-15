import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from './App';
import GroupBaseContainer from './containers/GroupBaseContainer';
import GroupDetailContainer from './containers/GroupDetailContainer';
import GroupListContainer from './containers/GroupListContainer';
import AddGroupContainer from './containers/AddGroupContainer';
import DocumentContainer from './containers/DocumentContainer';
import NotFound from './error/NotFound';
import UploadDocument from './shared/UploadDocument';
import Login from './users/Login';
import Signup from './users/Signup';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GroupListContainer} />
      <Route path="login/" component={Login} />
      <Route path="signup/" component={Signup} />
      <Route path="addgroup/" component={AddGroupContainer} />
      <Route path="mygroups/">
        <IndexRedirect to="/" />
        <Route path=":groupId/" component={GroupBaseContainer}>
          <IndexRoute component={GroupDetailContainer} />
          <Route path="document/">
            <IndexRoute component={UploadDocument} />
            <Route path=":id/" component={DocumentContainer} />
          </Route>
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
