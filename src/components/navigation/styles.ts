import styled from '@emotion/styled';
import { Container, Image, Link, Button } from 'components';

export const NavigationMain = styled.div<any>`
  ${({ theme, resizeNavbar }) => `
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: ${theme.zIndex.appBar};
    background-color: ${
      resizeNavbar ? theme.palette.common.black : '#00000000'
    };
    border-bottom: 1px solid ${
      resizeNavbar ? `${theme.palette.common.white}20` : '#00000000'
    };
    transition: 300ms background-color ease-in-out;
  `}
`;

export const NavigationInner = styled(Container)`
  ${({ theme }) => `
        padding: ${theme.spacing(5)};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`;

export const NavigationLogoImage = styled(Image)`
  width: 150px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: calc(50% - 50px);
  backface-visibility: hidden;
  transition: transform 300ms ease-in-out;
`;

export const NavigationLogoImageBig = styled(Image)`
  width: 240px;
  height: 50px;
  position: absolute;
  left: 0px;
  top: calc(50% - 25px);
  backface-visibility: hidden;
  transition: transform 300ms ease-in-out;
`;

export const NavigationLogo = styled.a<any>`
  ${({ theme, resizeNavbar }) => `
    cursor: pointer;
    display: block;
    width: 240px;
    transition: 300ms height ease-in-out; 
    height: ${resizeNavbar ? 50 : 100}px;
    position: relative;
    ${NavigationLogoImage} {
      transform:${resizeNavbar ? 'rotateX(180deg)' : 'rotateX(0deg)'};
    }
    ${NavigationLogoImageBig} {
      transform:${resizeNavbar ? 'rotateX(0deg)' : 'rotateX(180deg)'};
    }

     ${theme.breakpoints.down('lg')} {
      transform: scale(0.9);
    }
  `}
`;

export const NavigationActions = styled.div<any>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: 50px;
    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `}
`;

export const NavigationHamburger = styled(Button)<any>`
  ${({ theme }) => `
    padding: 0;
    min-width: unset;
    width: 40px;
    height: 40px;
    display: none;
    align-items: center;
    justify-content: center;
    ${theme.breakpoints.down('lg')} {
      display: flex;
    }
    svg {
      width: 32px;
      height: 32px;
    }
  `}
`;

export const NavigationItems = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavigationItem = styled(Link)<any>`
  ${({ theme }) => `
    text-decoration: none;
    color: ${theme.palette.common.white};
    text-transform: uppercase;
    font-size: 14px;
     ${theme.breakpoints.down('lg')} {
      font-size: 12px;
    }
  `}
`;

export const NavigationLanguages = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavigationLanguage = styled(Button)<any>`
  ${({ theme }) => `
    min-width: unset;
    padding: ${theme.spacing(2)};
    font-size: 12px;
     ${theme.breakpoints.down('lg')} {
      transform: scale(0.8);
    }
  `}
`;
