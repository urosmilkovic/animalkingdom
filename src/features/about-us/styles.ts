import styled from '@emotion/styled';
import { Container, Heading, Image, List, Note, Text } from 'components';

export const AboutUsPageMain = styled.div`
  width: 100%;
`;

export const AboutUsPageContent = styled(Container)`
  ${({ theme }) => `
    display: flex;
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
    gap: ${theme.spacing(10)};
  `}
`;

export const AboutUsPageContentLeft = styled.div<any>`
  ${({ theme }) => `
    width: 40%;
    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `}
`;

export const AboutUsPageContentRight = styled.div<any>`
  ${({ theme }) => `
    width: 60%;
    ${theme.breakpoints.down('lg')} {
      width: 100%;
    }
  `}
`;

export const AboutUsPageContentTitle = styled(Heading)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
  `}
`;

export const AboutUsPageContentNote = styled(Note)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
  `}
`;

export const AboutUsPageContentText = styled(Text)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
  `}
`;

export const AboutUsPageContentList = styled(List)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(10)};
  `}
`;

export const AboutUsPageContentLeftWrapper = styled.div<any>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutUsPageImageHolder = styled.div<any>`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const AboutUsPageImage = styled(Image)<any>`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  object-fit: contain;
  object-position: center;
`;
