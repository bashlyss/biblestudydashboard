import React from 'react';
import { Form } from 'formsy-react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
class MyForm extends React.Component {
    constructor() {
        super();
        this.state = { canSubmit: false };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.submit = this.submit.bind(this);
    }
    get styles() {
        return {
            form: {
                padding: '20px',
                margin: '20px auto',
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
            reduceWidth: {
                width: '50%',
            },
            header: {
                marginTop: 0,
            },
            disabledSubmit: {
                display: 'none',
            },
        };
    }
    enableButton() {
        this.setState({ canSubmit: true });
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }
    submit(data) {
        if (this.props.clearOnSubmit) {
            this.form.reset();
            _.each(this.form.inputs, (input) => { input.reset(); });
        }
        this.props.submit(data);
    }
    render() {
        return (
          <div style={[this.styles.form, this.props.reduceWidth && this.styles.reduceWidth]}>
            <h3 style={this.styles.header}>{this.props.title}</h3>
            <Form
              ref={(form) => { this.form = form; }}
              onSubmit={this.submit}
              onValid={this.enableButton}
              onInvalid={this.disableButton}
            >
              {this.props.children}
              <div style={this.styles.submitWrapper}>
                <button
                  type="submit"
                  disabled={!this.state.canSubmit}
                  style={[this.styles.submit, !this.state.canSubmit && this.styles.disabledSubmit]}
                >
                  {this.props.submitText}
                </button>
              </div>
            </Form>
          </div>
        );
    }
}

MyForm.propTypes = {
    clearOnSubmit: React.PropTypes.bool,
    submit: React.PropTypes.func,
    reduceWidth: React.PropTypes.bool,
    title: React.PropTypes.string,
    submitText: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
};

MyForm.defaultProps = {
    title: '',
    submitText: 'Submit',
    reduceWidth: false,
    clearOnSubmit: false,
    submit: _.noop,
};

export default MyForm;
