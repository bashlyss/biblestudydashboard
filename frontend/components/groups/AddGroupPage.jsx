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
              options: _.map(results, user => ({value: user.id, label: user.email})),
              complete: true,
            });
        });
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)} title="Create a new Group">
            <Input title="Name" name="name" required />
            <TextInput title="Description" name="description" required />
            <SelectInput
              title="Users"
              name="user_ids"
              loadOptions={this.getUsers}
              multi={true}
              allowCreate={true}
              required
            />
          </Form>
        )
    }
}
AddGroupPage.contextTypes = {
    router: React.PropTypes.object,
}

export default AddGroupPage;
