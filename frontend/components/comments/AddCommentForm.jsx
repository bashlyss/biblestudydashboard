import React from 'react';
import Form from '../common/Form';
import { Input, TextInput } from '../common/Fields';

const AddCommentForm = props => (
  <Form submit={props.onSubmit} title="Add a comment" clearOnSubmit>
    <Input title="Title" name="title" />
    <TextInput title="Comment" name="comment" required />
  </Form>
);

AddCommentForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
};

export default AddCommentForm;
