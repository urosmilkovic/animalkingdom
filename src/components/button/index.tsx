import React from 'react';
import { ButtonType } from 'components/button/types';
import { ButtonWrapper } from 'components/button/styles';

const Button = ({ children, ...props }: ButtonType) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
);

export default Button;
