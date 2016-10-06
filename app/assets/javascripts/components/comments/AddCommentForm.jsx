import React from 'react';
import Form from '../common/Form';
import { Input, TextInput } from '../common/Fields';
import $ from 'jquery';
import _ from 'lodash';

class AddCommentForm extends React.Component {
    submit(data) {
        data.attached_to_type = this.props.type;
        data.attached_to_id = this.props.parentId;
        $.post('/comments', data, this.props.updateAfterAdd);
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)}>
            <Input title="Title" name="title" required />
            <TextInput title="Comment" name="comment" required />
          </Form>
        )
    }
}

export default AddCommentForm;
