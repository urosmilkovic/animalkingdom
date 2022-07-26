import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { ImageMainType } from 'components/image/types';

const show = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ImageMain = styled.img<ImageMainType>`
  ${({ loaded }) => `
        opacity: 0;
        animation-play-state: ${loaded ? 'running;' : 'paused'};
        animation: ${show} 1000ms forwards ease;
    `}
`;
