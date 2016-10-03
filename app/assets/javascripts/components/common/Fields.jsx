import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Formsy from 'formsy-react';

const FieldGroup = ({id, label, help, ...props}) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
}

const Input = React.createClass({
    componentWillMount() {
        this.type = "text"
    },
    mixins: [Formsy.Mixin],
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {
        const className = (this.props.className || '') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
        const errorMessage = this.getErrorMessage();

        return FieldGroup({
            onChange: this.changeValue,
            value: this.getValue(),
            help: errorMessage,
            className,
            type: this.type,
            ...this.props
        });
    },
});

Input.propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    label: React.PropTypes.string,
};

Input.defaultProps = {
    id: '', className: '', label: '',
};


class EmailInput extends Input {
    componentWillMount() {
        this.type = "email";
    }
};

EmailInput.defaultProps = {
    id: '', className: '', label: 'Email',
};


class PasswordInput extends Input {
    componentWillMount() {
        this.type = "password";
    }
};

PasswordInput.defaultProps = {
    id: '', className: '', label: 'Password',
};

export {
    Input,
    EmailInput,
    PasswordInput,
};
