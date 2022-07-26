import styled from '@emotion/styled';

export const CardMain = styled.div<any>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white};
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 9%);
        border-radius: 4px;
        border: 1px solid ${theme.palette.common.black}40;
    `}
`;
