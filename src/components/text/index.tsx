import React from 'react';
import { TextType } from 'components/text/types';
import { TextWrapper } from 'components/text/styles';

const Text = ({ children, ...props }: TextType) => (
  <TextWrapper {...props}>{children}</TextWrapper>
);

export default Text;
