import React from 'react';
import { HeadingType } from 'components/heading/types';
import { HeadingWrapper } from 'components/heading/styles';

const Heading = ({ children, variant = 'h2', ...props }: HeadingType) => (
  <HeadingWrapper variant={variant} {...props}>
    {children}
  </HeadingWrapper>
);

export default Heading;
