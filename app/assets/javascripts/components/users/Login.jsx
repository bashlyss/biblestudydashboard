import React from 'react';
import { Link } from 'react-router';
import Form from '../common/Form';
import { EmailInput, PasswordInput } from '../common/Fields';
import $ from 'jquery';

class Login extends React.Component {
    submit(data) {
        $.post('/login', data, success => {
            if (success) {
                window.location.href = '/';
            }
        });
    }
    render() {
        return (
          <div>
            <Form submitText="Log In" submit={this.submit.bind(this)} title="Login">
              <EmailInput id="email" title="Email" name="email" required />
              <PasswordInput id="password" title="Password" name="password" required />
            </Form>
            <span>Don't have an account yet? <Link to="/signup/">Sign up here</Link></span>
          </div>
        )
    }

}

export default Login;
