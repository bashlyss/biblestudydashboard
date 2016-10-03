import React from 'react';
import { Form } from 'react-bootstrap';
import { EmailInput, PasswordInput } from '../common/Fields';

class Login extends React.Component {
    getValidationState() {
        return 'success';
        return 'warning';
        return 'error';
    }
    render() {
        return (
          <Form horizontal>
            <EmailInput id="email" />
            <PasswordInput id="password" />
          </Form>
        )
    }

}

export default Login;
