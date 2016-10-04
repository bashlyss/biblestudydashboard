import React from 'react';
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
          <Form submitText="Log In" submit={this.submit.bind(this)}>
            <EmailInput id="email" title="Email" name="email" required />
            <PasswordInput id="password" title="Password" name="password" required />
          </Form>
        )
    }

}

export default Login;
