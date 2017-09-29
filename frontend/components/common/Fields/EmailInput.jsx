import React from 'react';

import Input from './Input';

const EmailInput = props => (
  <Input
    type="email"
    validations="isEmail"
    validationError="This is not a valid email"
    {...props}
  />
);

export default EmailInput;
