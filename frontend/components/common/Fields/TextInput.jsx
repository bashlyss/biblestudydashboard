import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';

const TextInput = React.createClass({
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
      },
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  reset() {
    this.resetValue();
    this.input.value = '';
  },

  render() {
    const className = `form-group${this.props.className || ' '
    }${this.showRequired() ? 'required' : this.showError() ? 'error' : ''}`;

    return (
      <div style={this.styles().container} className={className}>
        <label style={this.styles().label} htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <textarea
          ref={(input) => { this.input = input; }}
          style={this.styles().input}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
        />
      </div>
    );
  },
});

export default Radium(TextInput);
