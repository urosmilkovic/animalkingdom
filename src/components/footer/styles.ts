import styled from '@emotion/styled';
import { HeadingWrapper } from 'components/heading/styles';
import { TextWrapper } from 'components/text/styles';
import { Link, Heading, Image, Container } from 'components';

export const FooterMain = styled.div<any>`
  ${({ theme }: any) => `
    background-color: ${theme.palette.common.black};
    position: relative;
    overflow: hidden;
    padding: 0px ${theme.spacing(5)};
  `}
`;

export const FooterContainer = styled.div`
  padding: 0px;
  position: relative;
`;

export const FooterBackground = styled.div<any>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const FooterSection = styled.div<{ spacing?: number; theme?: any }>`
  ${({ theme, spacing = 5 }) => `
    padding: ${theme.spacing(spacing)} ${theme.spacing(5)};
    &:not(:last-child) {
        border-bottom: 1px solid ${theme.palette.common.white}80;
    }
  `}
`;

export const FooterHeading = styled(Heading)<any>`
  ${({ theme }) => `
      color: ${theme.palette.primary.main};
    `}
`;

export const FirstSection = styled(FooterSection)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    ${HeadingWrapper} {
        margin-bottom: ${theme.spacing(5)};
    }
    ${TextWrapper} {
        color: ${theme.palette.common.white};
        margin-bottom: ${theme.spacing(5)};
        max-width: 600px;
    }
  `}
`;

export const SecondSection = styled(FooterSection)<any>`
  width: 100%;
`;

export const SecondSectionInner = styled(Container)`
  ${({ theme }) => `
    width: 100%; 
    display: flex;
    ${theme.breakpoints.down('sm')} {
      display: block;
    }
  `}
`;

export const ThirdSection = styled(FooterSection)`
  width: 100%;
`;

export const ThirdSectionInner = styled(Container)`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${TextWrapper} {
        color: ${theme.palette.common.white};
        font-size: 14px;
    }
    ${theme.breakpoints.down('sm')} {
      display: block;
      text-align: center;
      ${TextWrapper} {
          &:not(:last-child) {
            margin-bottom: ${theme.spacing(10)};
          }
      }
    }
  `}
`;

export const FooterColumn = styled.div<any>`
  ${({ theme }) => `
    width: 100%;
    ${theme.breakpoints.down('sm')} {
      text-align: center;
      &:not(:last-child) {
        margin-bottom: ${theme.spacing(10)};
      }
    }
  `}
`;

export const FooterColumnTitle = styled.h3<any>`
  ${({ theme }) => `
        color: ${theme.palette.common.white};
        font-weight: 700;
        margin: 0px;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 4px;
        margin-bottom: ${theme.spacing(5)};

    `}
`;

export const FooterColumnNavigation = styled.div<any>`
  ${({ theme }) => `
    padding: ${theme.spacing(0)};
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.down('sm')} {
      align-items: center;
    }
  `}
`;

export const FooterLogo = styled.div<any>`
  ${({ theme }) => `
    width: 240px;
    height: 150px;
    position: relative;
    left: 0px;
    top: 0px;
    margin-bottom: ${theme.spacing(15)};
  `}
`;

export const FooterLogoImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const FooterLink = styled(Link)<any>`
  ${({ theme }) => `
      color: ${theme.palette.common.white};
      font-weight: 400;
        white-space: nowrap;
        width: min-content;
        font-size: 14px;
        &::before {
            background-color: ${theme.palette.common.white};
            transform-origin: 0% 50%;
        }
        &:not(:last-child) {
          margin-right: ${theme.spacing(2)};
        }
    `}
`;

export const FooterSocialNetwork = styled.a<any>`
  ${({ theme }) => `
      color: ${theme.palette.common.white};
      cursor: pointer;
    `}
`;

export const FooterColumnNavigationInline = styled(FooterColumnNavigation)<any>`
  ${({ theme }) => `
    flex-direction: row;
    ${theme.breakpoints.down('sm')} {
      justify-content: center;
    }
  `}
`;
