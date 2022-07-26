import styled from '@emotion/styled';

export const NoteMain = styled.div<any>`
  ${({ theme }) => `
        color: ${theme.palette.common.black};
        padding-left: ${theme.spacing(10)};
        border-left: 3px solid ${theme.palette.common.black};
        font-weight: 700;
    `}
`;
