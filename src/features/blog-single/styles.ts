import styled from '@emotion/styled';
import { Container, Heading, Image, Text } from 'components';

export const BlogSinglePageMain = styled.div`
  width: 100%;
  padding-top: 91px;
`;

export const BlogSingleWrapper = styled(Container)`
  ${({ theme }) => `
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
    display: flex;
    gap: ${theme.spacing(5)};
    ${theme.breakpoints.down('lg')} {
      flex-wrap: wrap;
    }
    ${theme.breakpoints.down('sm')} {
      padding: 0px;
    }
  `}
`;

export const BlogSingleContent = styled.div`
  width: 100%;
`;

export const BlogSingleSimilar = styled.div<any>`
  ${({ theme }) => `
  min-width: 280px;
  width: 280px;
  & > * {
    &:not(:last-child) {
        margin-bottom: ${theme.spacing(5)};
    }
  }
  ${theme.breakpoints.down('lg')} {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(5)};
    & > * {
      &:not(:last-child) {
          margin-bottom: 0px;
      }
    }
  }
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.spacing(5)};
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const BlogSingleImageHolder = styled.div`
  width: 100%;
  padding-top: 50%;
  position: relative;
`;

export const BlogSingleImage = styled(Image)`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BlogSingleTitleHolder = styled.div<any>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white};
        padding: ${theme.spacing(5)};
        position: relative;
        top: -50px;
        width: calc(100% - ${theme.spacing(10)});
        margin: 0px auto -30px;
    `}
`;

export const BlogSingleTitle = styled(Heading)``;

export const BlogSingleTag = styled.div<any>`
  ${({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    display: inline-block;
    padding: ${theme.spacing(1)} ${theme.spacing(5)};
    font-size: 12px;
    font-weight: 700;
  `}
`;

export const BlogSingleText = styled(Text)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
    padding: 0 ${theme.spacing(10)};
  `}
`;

export const BlogSingleDate = styled.div<any>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(10)};
    border-top: 1px solid ${theme.palette.common.black}20;
    padding: ${theme.spacing(5)} ${theme.spacing(10)};
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  `}
`;
