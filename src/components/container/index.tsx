import React from 'react';
import { ContainerMain } from 'components/container/styles';

const Container = ({ children, ...props }: any) => (
  <ContainerMain {...props}>{children}</ContainerMain>
);

export default Container;
