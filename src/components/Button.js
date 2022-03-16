import React from 'react';
import { Button as NBButton } from 'native-base';

const Button = ({ children, ...props }) => {
  return <NBButton {...props}>{children}</NBButton>;
};

export default Button;
