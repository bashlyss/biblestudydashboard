import React from 'react';
import { Link } from 'react-router';
import Form from '../common/Form';
import { Input, EmailInput, PasswordInput } from '../common/Fields';
import UserActions from '../../actions/UserActions';
import _ from 'lodash';

class Signup extends React.Component {
    submit(data) {
        if (data.password !== data.password_confirmation)
            // TODO raise a warning to the user
            { return; }
        const cleaned_data = _.omit(data, 'password_confirmation');
        UserActions.create(cleaned_data).then(() => {
            this.context.router.push('/login/');
        });
    }
    render() {
        return (
          <div>
            <Form submit={this.submit.bind(this)} title="Register to join groups">
              <Input id="fname" title="First Name" name="first_name" required />
              <Input id="lname" title="Last Name" name="last_name" required />
              <EmailInput id="email" title="Email" name="email" required />
              <PasswordInput id="password" title="Password" name="password" required />
              <PasswordInput id="password_confirmation" title="Confirm Password" name="password_confirmation" required />
            </Form>
            <span>Already have an account? <Link to="/login/">Login here</Link></span>
          </div>
        );
    }
}
Signup.contextTypes = {
    router: React.PropTypes.object,
};

export default Signup;
