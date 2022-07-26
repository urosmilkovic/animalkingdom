import styled from '@emotion/styled';
import { List } from '@mui/material';
import { Button } from 'components';

export const MobileNavigationList = styled(List)`
  width: 280px;
  max-width: 100%;
`;
export const MobileNavigationLanguages = styled.div<any>`
  ${({ theme }) => `
    display: flex;
    gap: 10px;
    padding: ${theme.spacing(4)};
    width: 100%;
  `}
`;

export const MobileNavigationLanguage = styled(Button)<any>`
  ${({ theme }) => `
    min-width: unset;
    padding: ${theme.spacing(2)};
    width: 100%;
    font-size: 12px;
     ${theme.breakpoints.down('lg')} {
      transform: scale(0.8);
    }
  `}
`;
