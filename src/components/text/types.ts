import React from 'react';

export type TextType = React.HTMLProps<HTMLHeadingElement> & {
  children?: React.ReactNode;
};
