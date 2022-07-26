import styled from '@emotion/styled';
import { Image, Heading, Button, Text } from 'components';

export const ItemCard = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  position: relative;
`;

export const ItemCardImageHolder = styled.div<any>`
  ${({ theme }) => `
    width: 100%;
    padding-top: 60%;
    position: relative;
    background-color: ${theme.palette.common.black}10;
  `}
`;

export const ItemCardImageHolderInner = styled.div<any>`
  ${({ theme }) => `
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        padding: ${theme.spacing(5)};
    `}
`;

export const ItemCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ItemCardContent = styled.div<any>`
  ${({ theme }) => `
    border-top: 1px solid ${theme.palette.common.black}20;
    padding: ${theme.spacing(7)};
  `}
`;

export const ItemCardContentTitle = styled(Heading)<any>`
  ${({ theme }) => `
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: ${theme.spacing(3)};
        height: 51px;
    `}
`;

export const ItemCardContentDescription = styled(Text)<any>`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

export const ItemCardButton = styled(Button)<any>`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.spacing(5)};
  `}
`;
