import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const LinkWrapper = styled.a<any>`
  ${({ theme, inline }: { theme: any; inline: boolean }) => `
    ${css(theme.typography.link).styles}
    color: ${theme.palette.primary.light};
    cursor: pointer;
    position: relative;
    transform: translateY(0px);
    transition: 150ms transform ease-in-out, 150ms color ease-in-out;
    display: inline-block;
    &::before {
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0px;
      bottom: 0px;
      transform-origin: 50% 50%;
      transform: scaleX(0);
      content: "";
      background-color: ${theme.palette.primary.dark}00;
      transition: 150ms background-color ease-in-out, 300ms transform ease-in-out;
    }
    &:hover {
      color: ${theme.palette.primary.dark};
      ${inline === undefined ? 'transform: translateY(-5px);' : ''}
      &::before {
        background-color: ${theme.palette.primary.dark};
        transform: scaleX(1);
      }
    }
  `}
`;
