import styled from '@emotion/styled';
import { Container, Heading, Search } from 'components';

export const BlogPageMain = styled.div`
  width: 100%;
`;

export const BlogWrapper = styled(Container)`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
  `}
`;

export const BlogList = styled.div`
  width: 100%;
`;

export const BlogListResults = styled(Heading)<any>`
  width: 100%;
`;

export const BlogFilterItem = styled.div<any>`
  ${({ theme, active }) => `
    width: 100%;
    padding: ${theme.spacing(3)} ${theme.spacing(5)};
    background-color: ${active ? theme.palette.primary.light : '#00000000'};
    color: ${active ? theme.palette.common.white : theme.palette.common.black};
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.palette.common.black}20;
    }
    &:hover {
    background-color: ${active ? theme.palette.primary.main : '#00000010'};
    }
  `}
`;

export const BlogAll = styled.div<any>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    width: 100%;
    gap: ${theme.spacing(5)};
    margin-top: ${theme.spacing(10)};
  `}
`;

export const BlogFilterSearch = styled(Search)<any>`
  ${({ theme }) => `
      margin-bottom: ${theme.spacing(5)};
    `}
`;
