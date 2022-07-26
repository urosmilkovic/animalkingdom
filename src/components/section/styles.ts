import styled from '@emotion/styled';
import { Heading, Text } from 'components';

export const SectionMain = styled.div`
  width: 580px;
  max-width: 100%;
`;

export const SectionTitle = styled(Heading)<any>`
  ${({ theme, color }) => `
        margin-bottom: ${theme.spacing(8)};
        position: relative;
        &::before {
            width: 100px;
            height: 4px;
            background-color: ${theme.palette[color].main};
            content: '';
            position: absolute;
            bottom: -${theme.spacing(4)};
            left: 0px;
        }
    `}
`;

export const SectionDescription = styled(Text)``;

export const SectionActions = styled.div<any>`
  ${({ theme }) => `
    display: flex;
    gap: 10px;
    margin-top: ${theme.spacing(8)};
  `}
`;
