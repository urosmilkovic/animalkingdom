import styled from '@emotion/styled';
import { Container, Section, Image } from 'components';
import { TextWrapper } from 'components/text/styles';
import { HeadingWrapper } from 'components/heading/styles';

export const HeroMain = styled.div<any>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.black};
        position: relative;
        width: 100%;
        
    `}
`;

export const HeroSvg = styled.svg<any>`
  ${({ theme }) => `
        fill: ${theme.palette.common.white};
        transform: rotate(180deg);
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 100px;
    `}
`;

export const HeroContent = styled(Container)<any>`
  ${({ theme, isBig }) => `
        min-height: ${isBig ? 800 : 200}px;
        position: relative;
        width: 100%;
        padding: ${theme.spacing(50)} ${theme.spacing(5)};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;

export const HeroSection = styled(Section)<any>`
  ${({ theme }) => `
        text-align: center;
        ${HeadingWrapper} {
            color: ${theme.palette.common.white};
            &::before {
                left: 50%;
                transform: translateX(-50%);
            }
        }
        ${TextWrapper} {
            color: ${theme.palette.common.white};
        }
    `}
`;

export const HeroImage = styled(Image)<any>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroImageHolder = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  &::after {
    width: 100%;
    height: 100%;
    content: '';
    left: 0px;
    top: 0px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
  }
`;
