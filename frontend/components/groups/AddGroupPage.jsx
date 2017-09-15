import React from 'react';
import _ from 'lodash';
import Form from '../common/Form';
import { Input, TextInput, SelectInput } from '../common/Fields';
import GroupActions from '../../actions/GroupActions';

class AddGroupPage extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }
    submit(data) {
        GroupActions.create(data);
        // TODO navigate on success
        // this.context.router.push('/')
    }
    render() {
        return (
          <Form submit={this.submit} title="Create a new Group">
            <Input title="Name" name="name" required />
            <TextInput title="Description" name="description" required />
            <SelectInput
              title="Users"
              name="users"
              options={
                _.map(
                    this.props.users.objects,
                    user => ({ value: user.id, label: user.email })
                )
              }
              multi
              allowCreate
              required
            />
          </Form>
        );
    }
}
AddGroupPage.contextTypes = {
    router: React.PropTypes.object,
};

export default AddGroupPage;
