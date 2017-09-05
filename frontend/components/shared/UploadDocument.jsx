import React from 'react';
import Form from '../common/Form';
import { Input, TextInput, FileInput } from '../common/Fields';
import _ from 'lodash';
import DocActions from '../../actions/DocActions';

class UploadDocument extends React.Component {
    submit(data) {
        data['uploaded_to'] = this.props.params.groupId;
        const parsedData = new FormData();
        _.forIn(data, (v, k) => parsedData.append(k, v));
        // TODO Navigate back to group home
        DocActions.create(parsedData);
    }
    render() {
        return (
          <Form submit={this.submit.bind(this)} title="Upload a document to the group">
            <Input title="Title" name="title" required />
            <TextInput title="Description" name="description" required />
            <FileInput title="Document" name="document" required />
          </Form>
        )
    }
}
UploadDocument.contextTypes = {
    router: React.PropTypes.object,
}

export default UploadDocument;
