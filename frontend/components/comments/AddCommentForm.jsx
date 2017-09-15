import React from 'react';
import Form from '../common/Form';
import { Input, TextInput } from '../common/Fields';
import GroupCommentActions from '../../actions/GroupCommentActions';
import DocumentCommentActions from '../../actions/DocumentCommentActions';

class AddCommentForm extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }
    submit(data) {
        const submitData = data;
        if (this.props.type === 'group') {
            submitData.group = this.props.parentId;
            GroupCommentActions.create(submitData);
        }
        if (this.props.type === 'doc') {
            submitData.document = this.props.parentId;
            DocumentCommentActions.create(submitData);
        }
    }
    render() {
        return (
          <Form submit={this.submit} title="Add a comment" clearOnSubmit>
            <Input title="Title" name="title" />
            <TextInput title="Comment" name="comment" required />
          </Form>
        );
    }
}

AddCommentForm.propTypes = {
    type: React.PropTypes.oneOf(['group', 'doc']).isRequired,
    parentId: React.PropTypes.number.isRequired,
};

export default AddCommentForm;
