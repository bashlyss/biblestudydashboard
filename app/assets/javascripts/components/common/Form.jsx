import React from 'react'
import { Form } from 'formsy-react'
import Radium from 'radium'

@Radium
class MyForm extends React.Component {
    constructor() {
        super();
        this.state = { canSubmit: false };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }
    get styles() {
        return {
            form: {
                padding: '20px',
                margin: '20px auto',
                width: '50%',
                border: '3px solid #0d0221',
                backgroundColor: '#a1a6b4',
            },
            submitWrapper: {
                height: '30px',
                position: 'relative',
            },
            submit: {
                backgroundColor: '#84dcc6',
                color: '#4b4e6d',
                padding: '4px 8px',
                fontSize: '16px',
                position: 'absolute',
                right: 0,
                bottom: 0,
            },
        };
    }
    enableButton() {
        this.setState({ canSubmit: true });
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }
    render() {
        return (
          <Form style={this.styles.form} onSubmit={this.props.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            {this.props.children}
            <div style={this.styles.submitWrapper}>
              <button type="submit" disabled={!this.state.canSubmit} style={this.styles.submit}>
                {this.props.submitText || 'Submit'}
              </button>
            </div>
          </Form>
        )
    }
}

export default MyForm;
