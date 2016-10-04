import React from 'react';
import Form from '../common/Form';
import { Input, EmailInput, PasswordInput } from '../common/Fields';
import $ from 'jquery';

class Signup extends React.Component {
    submit(data) {
        $.post('/users', data, success => {
            if (success) {
                this.context.router.push('/login/')
            }
        });
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)}>
            <Input id="name" title="Name" name="name" required />
            <EmailInput id="email" title="Email" name="email" required />
            <PasswordInput id="password" title="Password" name="password" required />
            <PasswordInput id="password_confirmation" title="Confirm Password" name="password_confirmation" required />
          </Form>
        )
    }
}

export default Signup;

