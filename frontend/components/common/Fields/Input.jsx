import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';

const Input = React.createClass({
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
      },
    };
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
  reset() {
    this.resetValue();
    this.input.value = '';
  },
  render() {
    const className = `form-group${this.props.className || ' '
    }${this.showRequired() ? 'required' : this.showError() ? 'error' : ''}`;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message

    return (
      <div className={className} style={this.styles().container}>
        <label style={this.styles().label} htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <input
          ref={(input) => { this.input = input; }}
          style={this.styles().input}
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
        />
      </div>
    );
  },
});

export default Radium(Input);
