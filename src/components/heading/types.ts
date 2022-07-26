import { ReactNode } from 'react';

export type HeadingType = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode | String;
};
