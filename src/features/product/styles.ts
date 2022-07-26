import styled from '@emotion/styled';
import { Card, Container, Image, Section } from 'components';
import { HeadingWrapper } from 'components/heading/styles';
import { TextWrapper } from 'components/text/styles';

export const ProductPageMain = styled.div`
  width: 100%;
  padding-top: 91px;
`;

export const ProductWrapper = styled(Container)`
  ${({ theme }) => `
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
  `}
`;

export const ProductImageHolder = styled.div<any>`
  ${({ theme }) => `
    width: 60%;
    height: 600px;
    padding: ${theme.spacing(5)};
    position: relative;
    ${theme.breakpoints.down('lg')} {
      width: 100%;
      height: unset;
    }
  `}
`;

export const ProductInfosImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(5);
  filter: blur(2px);
`;

export const ProductInfos = styled.div<any>`
  ${({ theme }) => `
    display: flex;
    background-color: ${theme.palette.common.black}20;
    width: 100%;
    position: relative;
    overflow: hidden;
    ${theme.breakpoints.down('lg')} {
      flex-wrap: wrap;
    }
  `}
`;

export const ProductInfosBackground = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const ProductTableHolder = styled.div<any>`
  ${({ theme }) => `
    width: 40%;
    padding: ${theme.spacing(15)};
    position: relative;
    ${theme.breakpoints.down('lg')} {
      width: 100%;
    }
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing(5)};
    }
  `}
`;

export const ProductTable = styled(Card)<any>`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    padding: ${theme.spacing(10)};
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing(2)};
    }
  `}
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ProductContent = styled(Card)<any>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductContentInner = styled.div<any>`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(10)};
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing(5)};
    }
  `}
`;

export const ProductSection = styled(Section)<any>`
  ${({ theme }) => `
    width: 100%;
    &:not(:last-child) {
      margin-bottom: ${theme.spacing(10)};
    }
    ${HeadingWrapper} {
      font-size: 20px;
    }
    ${TextWrapper} {
      font-size: 14px;
    }
  `}
`;

export const ProductTableElement = styled.table`
  width: 100%;
`;

export const ProductTableRow = styled.tr<any>`
  ${({ theme }) => `
    width: 100%;
    &:nth-of-type(odd) {
      background-color: ${theme.palette.common.black}10;
    }
    &:nth-of-type(even) {
      background-color: ${theme.palette.common.black}20;
    }
  `}
`;

export const ProductTableCell = styled.td<any>`
  ${({ theme, main }) => `
    text-align: ${main ? 'center' : 'left'};
    font-weight: ${main ? '700' : '400'};
    font-size: ${main ? '18' : '14'}px;
    line-height: ${main ? 2 : 1.5};
    border-bottom: ${main ? `1px solid ${theme.palette.common.black}` : 'none'};
    padding: ${theme.spacing(2)};
    `}
`;
