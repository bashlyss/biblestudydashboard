import React from 'react';
import Form from '../common/Form';
import { Input, TextInput } from '../common/Fields';
import GroupCommentActions from '../../actions/GroupCommentActions';
import DocumentCommentActions from '../../actions/DocumentCommentActions';

class AddCommentForm extends React.Component {
    submit(data) {
        if (this.props.type === 'group') {
            data.group = this.props.parentId;
            GroupCommentActions.create(data);
        }
        if (this.props.type === 'doc') {
            data.document = this.props.parentId;
            DocumentCommentActions.create(data);
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
