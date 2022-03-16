import React from 'react';
import { Checkbox } from 'native-base';

const CheckBox = ({ children, ...props }) => {
  return <Checkbox {...props}>{children}</Checkbox>;
};

export default CheckBox;
