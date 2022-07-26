import React from 'react';
import { ColorType } from 'theme/theming/createPalette';

type VariantType = 'contained' | 'outlined' | 'text';
type SizeType = 'large' | 'medium' | 'small';

export type ButtonType = {
  children?: React.ReactNode;
  color?: ColorType;
  variant?: VariantType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  size?: SizeType;
  fullWidth?: boolean;
  [key: string]: any;
};
