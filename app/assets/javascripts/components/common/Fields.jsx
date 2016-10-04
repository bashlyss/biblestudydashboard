import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';

let Input = React.createClass({
    mixins: [Formsy.Mixin],
    styles() {
        return {
            container: {
              textAlign: 'center',
              margin: '10px 0',
            },
            label: {
              width: '30%',
              display: 'inline-block',
              paddingRight: '5px',  
            },
            input: {
              width: '60%',
              display: 'inline-block',
            }
        }
    },
    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {
        const className = 'form-group' + (this.props.className || ' ') +
          (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

         // An error message is returned ONLY if the component is invalid
         // or the server has returned an error message
         const errorMessage = this.getErrorMessage();

         return (
           <div className={className} style={this.styles().container}>
               <label style={this.styles().label} htmlFor={this.props.name}>{this.props.title}</label>
               <input
                 style={this.styles().input}
                 type={this.props.type || 'text'}
                 name={this.props.name}
                 onChange={this.changeValue}
                 value={this.getValue()}
                 checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
               />
               <span className='validation-error'>{errorMessage}</span>
           </div>
        );
    }
});
Input = Radium(Input)


class EmailInput extends React.Component {
    render() {
        return <Input
          type="email"
          validations="isEmail"
          validationError="This is not a valid email"
          {...this.props}
        />;
    }
};


class PasswordInput extends React.Component {
    render() {
        return <Input type="password" {...this.props} />;
    }
};

export {
    Input,
    EmailInput,
    PasswordInput,
};
