import styled from '@emotion/styled';
import { Button } from 'components';

export const ScrollToTopButton = styled(Button)<any>`
  ${({ theme, visible }) => `
        padding: ${theme.spacing(0)};
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 1500;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        min-width: 0px;
        text-align: center;
        pointer-events: ${visible ? 'all' : 'none'};
        opacity: ${visible ? '1' : '0'};
        transform: translateX(${visible ? '0' : '150'}px);
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
    `}
`;
