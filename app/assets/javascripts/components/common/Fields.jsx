import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';
import Select from 'react-select';
import _ from 'lodash';

let Input = React.createClass({
    mixins: [Formsy.Mixin],
    styles() {
        return {
            container: {
              textAlign: 'center',
              margin: '10px 0',
            },
            label: {
              textAlign: 'right',
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
        if (this.props.type === 'checkbox') {
            this.setValue(event.currentTarget.checked);
        } else if (this.props.type === 'file') {
            this.setValue(event.currentTarget.files[0]);
        } else {
            this.setValue(event.currentTarget.value);
        }
    },
    render() {
        const className = 'form-group' + (this.props.className || ' ') +
          (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

         // An error message is returned ONLY if the component is invalid
         // or the server has returned an error message
         const errorMessage = this.getErrorMessage();

         return (
           <div className={className} style={this.styles().container}>
             <label style={this.styles().label} htmlFor={this.props.name}>
               {this.props.title}
             </label>
             <input
               style={this.styles().input}
               type={this.props.type || 'text'}
               name={this.props.name}
               onChange={this.changeValue}
               checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
             />
             <span className='validation-error'>{errorMessage}</span>
           </div>
        );
    }
});
Input = Radium(Input);

let SelectInput = React.createClass({
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
              textAlign: 'right',
            },
            input: {
              textAlign: 'initial',
              width: '60%',
              display: 'inline-block',
            }
        }
    },

    changeValue(options) {
      this.setValue(_.map(options, option => option.value));
    },

    render() {
        const className = 'form-group' + (this.props.className || ' ') +
          (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
        const errorMessage = this.getErrorMessage();

        const otherProps = _.omit(this.props, ['title', 'className', 'required']);
        otherProps.className = "mybiblestudy";
        otherProps.onChange = this.changeValue;
        otherProps.value = this.getValue();

        let select = <Select {...otherProps} />;
        if (this.props.loadOptions) {
            select = <Select.Async {...otherProps} />;
        }

        return (
          <div style={this.styles().container} className={className}>
            <label style={this.styles().label} htmlFor={this.props.name}>{this.props.title}</label>
            <Radium.Style scopeSelector=".Select.mybiblestudy" rules={this.styles().input} />
            {select}
            <span className="validation-error">{errorMessage}</span>
          </div>
        );
    }

});
SelectInput = Radium(SelectInput);

let TextInput = React.createClass({
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
              textAlign: 'right',
            },
            input: {
              width: '60%',
              display: 'inline-block',
            }
        }
    },

    changeValue(event) {
      this.setValue(event.currentTarget.value);
    },

    render() {
      const className = 'form-group' + (this.props.className || ' ') +
        (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
      const errorMessage = this.getErrorMessage();

      return (
        <div style={this.styles().container} className={className}>
          <label style={this.styles().label} htmlFor={this.props.name}>
            {this.props.title}
          </label>
          <textarea
            style={this.styles().input}
            name={this.props.name}
            onChange={this.changeValue}
            value={this.getValue()} />
          <span className="validation-error">{errorMessage}</span>
        </div>
      );
    }
});
TextInput = Radium(TextInput);

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

class FileInput extends React.Component {
    render() {
        return <Input type="file" {...this.props} />;
    }
}

export {
    Input,
    EmailInput,
    PasswordInput,
    SelectInput,
    TextInput,
    FileInput,
};
