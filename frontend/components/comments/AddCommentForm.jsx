import React from 'react';
import Form from '../common/Form';
import { Input, TextInput } from '../common/Fields';
import GroupCommentActions from '../../actions/GroupCommentActions';

class AddCommentForm extends React.Component {
    submit(data) {
        if (this.props.type === 'group') {
            data.group = this.props.parentId;
            GroupCommentActions.create(data);
        }
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)} title="Add a comment" clearOnSubmit>
            <Input title="Title" name="title" />
            <TextInput title="Comment" name="comment" required />
          </Form>
        )
    }
}

export default AddCommentForm;
