/* globals FormData */
import React from 'react';
import _ from 'lodash';
import Form from '../common/Form';
import { Input, TextInput, FileInput } from '../common/Fields';
import DocActions from '../../actions/DocActions';

class UploadDocument extends React.Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }
    submit(data) {
        const parsedData = new FormData();
        _.forIn(data, (v, k) => parsedData.append(k, v));
        parsedData.append('uploaded_to', this.props.params.groupId);
        // TODO Navigate back to group home
        DocActions.create(parsedData);
    }
    render() {
        return (
          <Form submit={this.submit} title="Upload a document to the group">
            <Input title="Title" name="title" required />
            <TextInput title="Description" name="description" required />
            <FileInput title="Document" name="document" required />
          </Form>
        );
    }
}
UploadDocument.contextTypes = {
    router: React.PropTypes.object,
};

export default UploadDocument;
