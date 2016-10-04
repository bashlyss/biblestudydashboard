import React from 'react';
import Form from '../common/Form';
import { Input, TextInput, SelectInput } from '../common/Fields';
import $ from 'jquery';
import _ from 'lodash';

class AddGroupPage extends React.Component {
    submit(data) {
        $.post('/groups', data, success => {
            if (success) {
                this.context.router.push('/')
            }
        });
    }
    getUsers(input, callback) {
        $.get('/users', {}, results => {
            callback(null, {
              options: _.map(results, user => ({value: user.email, label: user.email})),
              complete: true,
            });
        });
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)}>
            <Input title="Name" name="name" required />
            <TextInput title="Description" name="description" required />
            <SelectInput
              title="Users"
              name="emails"
              loadOptions={this.getUsers}
              multi={true}
              allowCreate={true}
              required
            />
          </Form>
        )
    }
}

export default AddGroupPage;
