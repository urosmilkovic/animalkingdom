import { Button } from '@mui/material';
import { gradient } from 'utilities/style';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type SizeType = 'small' | 'medium' | 'large';

const padding = (theme: any, size: SizeType) => {
  const sizes = {
    small: theme.spacing(1, 4),
    medium: theme.spacing(2, 6),
    large: theme.spacing(2.5, 8),
  };
  return sizes[size];
};

export const ButtonWrapper = styled(Button)<any>`
  ${({ theme, color = 'primary', size = 'medium' }: any) => `
    ${css(theme.typography.button).styles};
    border-radius: 4px;
    border-width: 2px;
    font-family: Montserrat, sans-serif;
    min-width: 140px;
    text-transform: none;
    padding: ${padding(theme, size)};
    &:hover {
      border-width: 2px;
    }
    &:disabled {
      border-width: 2px;
      opacity: 0.35;
    }
    &.MuiButton-contained {
      text-shadow: 0px 0px 2px #00000050;
        box-shadow: 0px 3px 10px 2px ${theme.palette[color].dark}40;
      svg {
        filter: drop-shadow(0px 0px 1px #00000050);
      }
      background: ${gradient(45, theme.palette[color].mainGradient)};
      &:hover {
        background: ${gradient(45, theme.palette[color].darkGradient)};
        box-shadow: 0px 3px 10px 2px ${theme.palette[color].dark}60;
      }
    }
    &.MuiButton-outlined {
      color: ${theme.palette[color].mainGradient[0]};
      border-color: ${theme.palette[color].mainGradient[0]};
      background: ${gradient(
        45,
        theme.palette[color].mainGradient.map((x: any) => `${x}20`)
      )};
      &:hover {
        color: ${theme.palette[color].darkGradient[0]};
        border-color: ${theme.palette[color].darkGradient[0]};
        background: ${gradient(
          45,
          theme.palette[color].darkGradient.map((x: any) => `${x}20`)
        )};
      }
    }
    &.MuiButton-text {
      color: ${theme.palette[color].mainGradient[0]};
      &:hover {
        color: ${theme.palette[color].darkGradient[0]};
        background: ${theme.palette[color].mainGradient[0]}20;
      }
    }
  `}
`;
