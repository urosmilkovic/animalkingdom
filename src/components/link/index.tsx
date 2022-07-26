import React from 'react';
import NextLink from 'next/link';
import { LinkType } from 'components/link/types';
import { LinkWrapper } from 'components/link/styles';

const Link = ({ children, href, ...props }: LinkType) => (
  <NextLink href={href}>
    <LinkWrapper {...props}>{children}</LinkWrapper>
  </NextLink>
);

export default Link;
