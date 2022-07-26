import styled from '@emotion/styled';
import { Button, Container } from 'components';
import { HeadingWrapper } from 'components/heading/styles';
import {
  PackagePreviewMain,
  PackagePreviewSide,
  PackagePreviewSection,
  PackagePreviewBagHolder,
  PackagePreviewBagImage,
} from 'components/package-preview/styles';

export const HomePageMain = styled.div`
  width: 100%;
`;
export const HomePageNewBags = styled(Container)`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${theme.spacing(20)} ${theme.spacing(5)};
  `}
`;

export const HomePageNewBagsImage = styled.div<any>`
  width: 100%;
  img {
    width: 100%;
    max-width: 500px;
  }
`;

export const HomePageNewBagsButton = styled(Button)<any>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(10)};
  `}
`;

export const HomePagePackages = styled.div<any>`
  ${({ theme }) => `
    width: 100%;
    ${theme.breakpoints.down('lg')} {
      ${PackagePreviewMain} {
        text-align: center;
        max-width: 100%;
        ${PackagePreviewSide} {
          width: 100%;
          ${PackagePreviewSection} {
            width: 100%;
          }
          ${PackagePreviewBagHolder} {
            width: 100%;
            max-width: 400px;
            padding-top: 0px;
            ${PackagePreviewBagImage} {
              width: 100%;
              position: static;
            }
          }
          ${HeadingWrapper} {
            &:before {
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
        
      }
    }
 `}
`;
