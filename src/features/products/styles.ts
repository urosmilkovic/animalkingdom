import styled from '@emotion/styled';
import { Card, Container, Heading, Search } from 'components';

export const ProductsPageMain = styled.div`
  width: 100%;
`;

export const ProductsWrapper = styled(Container)`
  ${({ theme }) => `
    display: flex;
    gap: ${theme.spacing(10)};
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
    ${theme.breakpoints.down('lg')} {
      flex-wrap: wrap;
    }
  `}
`;

export const ProductsFilter = styled.div<any>`
  ${({ theme }) => `
    min-width: 300px;
    max-width: 300px;
    padding-top: ${theme.spacing(24)};
    ${theme.breakpoints.down('lg')} {
      min-width: 100%;
      max-width: 100%;
    }
  `}
`;

export const ProductsList = styled.div`
  width: 100%;
`;

export const ProductsListResults = styled(Heading)<any>`
  width: 100%;
`;

export const ProductsFilterItem = styled.div<any>`
  ${({ theme, active }) => `
    width: 100%;
    padding: ${theme.spacing(3)} ${theme.spacing(5)};
    background-color: ${active ? theme.palette.primary.light : '#00000000'};
    color: ${active ? theme.palette.common.white : theme.palette.common.black};
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.palette.common.black}20;
      ${theme.breakpoints.down('lg')} {
        border-bottom: none;
        border-right: 1px solid ${theme.palette.common.black}20;
      }
    }
    &:hover {
    background-color: ${active ? theme.palette.primary.main : '#00000010'};
    }
  `}
`;

export const ProductsAll = styled.div<any>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;
    gap: ${theme.spacing(10)};
    margin-top: ${theme.spacing(10)};
    ${theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const ProductsFilterSearch = styled(Search)`
  ${({ theme }) => `
      margin-bottom: ${theme.spacing(5)};
    `}
`;

export const ProductsFilterItems = styled(Card)`
  ${({ theme }) => `
    width: 100%;
    overflow: hidden;
    ${theme.breakpoints.down('lg')} {
      display: flex;
    }
  `}
`;
