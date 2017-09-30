import React from 'react';
import { Link } from 'react-router';
import Form from '../common/Form';
import { EmailInput, PasswordInput } from '../common/Fields';
import UserActions from '../../actions/UserActions';

class Login extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit(data) {
    UserActions.login(data, this.context.router);
  }
  render() {
    return (
      <div>
        <Form submitText="Log In" submit={this.submit} title="Login">
          <EmailInput id="email" title="Email" name="email" required />
          <PasswordInput id="password" title="Password" name="password" required />
        </Form>
        <span>{"Don't have an account yet? "}<Link to="/signup/">Sign up here</Link></span>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Login;
