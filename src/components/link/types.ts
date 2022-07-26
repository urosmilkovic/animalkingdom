import React from 'react';

export type LinkType = React.HTMLProps<HTMLHeadingElement> & {
  href: string;
  inline?: boolean;
  children?: React.ReactNode;
};
