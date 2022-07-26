import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TextWrapper = styled.p<any>`
  ${({ theme }: any) => `
    ${css(theme.typography.text).styles}
    color: ${theme.palette.default.light};
  `}
`;
