import styled from '@emotion/styled';
import { Container, Image, Section } from 'components';
import { TextWrapper } from 'components/text/styles';
import { HeadingWrapper } from 'components/heading/styles';

export const PackagePreviewInner = styled(Container)`
  ${({ theme }) => `
        position: relative;
        padding: ${theme.spacing(30)} ${theme.spacing(5)};
        display: flex;
        align-items: center;
        height: 100vh;
        min-height: 400px;
        gap: 50px;
        ${theme.breakpoints.down('lg')} {
          flex-direction: column;
          height: unset;
        }
    `}
`;

export const PackagePreviewBagImage = styled(Image)<any>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const PackagePreviewSide = styled.div<any>`
  ${({ theme }) => `
    width: 50%;
    color: ${theme.palette.common.white};
    ${theme.breakpoints.down('lg')} {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  `}
`;

export const PackagePreviewMain = styled.div<any>`
  ${({ theme }) => `
        width: 100%;
        position: relative;
        border-top: 2px solid ${theme.palette.common.white};
        &:last-child {
            border-bottom: 2px solid ${theme.palette.common.white};
        }
        &:nth-of-type(odd) {
            ${PackagePreviewSide} {
                &:nth-of-type(1) {
                    order: 1;
                }
                &:nth-of-type(2) {
                    order: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        &:nth-of-type(even) {
            ${PackagePreviewSide} {
                &:nth-of-type(1) {
                    order: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                &:nth-of-type(2) {
                    order: 1;
                }
            }
        }
         ${theme.breakpoints.down('lg')} {
          &:nth-of-type(odd) {
              ${PackagePreviewSide} {
                  &:nth-of-type(1) {
                      order: 1;
                  }
                  &:nth-of-type(2) {
                      order: 2;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                  }
              }
          }
          &:nth-of-type(even) {
              ${PackagePreviewSide} {
                  &:nth-of-type(1) {
                      order: 1;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                  }
                  &:nth-of-type(2) {
                      order: 2;
                  }
              }
          }
        }
    `}
`;

export const PackagePreviewBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  clip-path: inset(0);
  &::after {
    width: 100%;
    height: 100%;
    content: '';
    left: 0px;
    top: 0px;
    background: radial-gradient(#00000000, #000000a0);
    position: absolute;
  }
`;

export const PackagePreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: fixed;
  left: 0px;
  top: 0px;
`;

export const PackagePreviewSection = styled(Section)<any>`
  ${({ theme }) => `
    ${TextWrapper} {
        color: ${theme.palette.common.white};
    }
    ${HeadingWrapper} {
        color: ${theme.palette.common.white};
    }
    ${theme.breakpoints.down('lg')} {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  `}
`;

export const PackagePreviewBagHolder = styled.div<any>`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;
