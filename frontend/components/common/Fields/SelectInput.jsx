import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';
import Select from 'react-select';
import _ from 'lodash';


const SelectInput = React.createClass({
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
            },
        };
    },

    changeValue(options) {
      this.setValue(_.map(options, option => option.value));
    },

    render() {
        const className = `form-group${this.props.className || ' '
          }${this.showRequired() ? 'required' : this.showError() ? 'error' : ''}`;

        const otherProps = _.omit(this.props, ['title', 'className', 'required']);
        otherProps.className = 'mybiblestudy';
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
          </div>
        );
    },

});

export default Radium(SelectInput);
