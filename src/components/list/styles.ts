import styled from '@emotion/styled';

export const ListMain = styled.div`
  width: 100%;
`;

export const ListItem = styled.div<any>`
  ${({ theme }) => `
        color: ${theme.palette.common.gray[8]};
        display: flex;
        align-items: center;
        padding: ${theme.spacing(1)} ${theme.spacing(0)};
        font-weight: 500;
    `}
`;

export const ListItemIcon = styled.div<any>`
  ${({ theme }) => `
        margin-right: ${theme.spacing(2)};
        color: ${theme.palette.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 20px;
            height: 20px;
        }
    `}
`;
