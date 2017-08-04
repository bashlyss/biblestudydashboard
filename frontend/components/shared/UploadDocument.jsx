import React from 'react';
import Form from '../common/Form';
import { Input, TextInput, FileInput } from '../common/Fields';
import $ from 'jquery';
import _ from 'lodash';

class UploadDocument extends React.Component {
    submit(data) {
        const parsedData = new FormData();
        _.forIn(data, (v, k) => parsedData.append(k, v));
        const url = _.replace('/groups/:groupId/docs', ':groupId', this.props.params.groupId);
        $.ajax({
            url,
            data: parsedData,
            type: 'POST',
            cache: false,
            processData: false,
            contentType: false,
            success: success => {
                if (success) {
                    const redirectUrl = _.replace(
                        '/mygroups/:groupId/',
                        ':groupId',
                        this.props.params.groupId
                    );
                    this.context.router.push(redirectUrl);
                }
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
