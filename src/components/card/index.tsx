import React from 'react';
import { CardMain } from 'components/card/styles';

const Card = ({ children, ...props }: any) => (
  <CardMain {...props}>{children}</CardMain>
);

export default Card;
