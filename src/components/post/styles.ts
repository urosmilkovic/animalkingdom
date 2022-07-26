import styled from '@emotion/styled';
import { Image, Heading, Button, Text } from 'components';

export const PostCardImageHolder = styled.div<any>`
  ${({ theme }) => `
    width: 30%;
    position: relative;
    background-color: ${theme.palette.common.black}10;
  `}
`;
export const PostCardContentTitle = styled(Heading)<any>`
  ${({ theme }) => `
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: ${theme.spacing(2)};
        height: 51px;
        ${theme.breakpoints.down('lg')} {
          font-size: 20px; 
        }
    `}
`;

export const PostCardButton = styled(Button)<any>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(5)};
    ${theme.breakpoints.down('lg')} {
          font-size: 14px; 
          padding: ${theme.spacing(1)}
        }
  `}
`;

export const PostCardContent = styled.div<any>`
  ${({ theme }) => `
    border-top: 1px solid ${theme.palette.common.black}20;
  `}
`;

export const PostCard = styled.div<any>`
  ${({ theme, type }) => `
    overflow: hidden;
    width: 100%;
    border-radius: 4px;
    position: relative;
    display: ${type === 'small' ? 'block' : 'flex'};
    gap: 20px;
    ${PostCardImageHolder} {
      width: ${type === 'small' ? '100%' : '30%'};
      height: ${type === 'small' ? '150px' : 'auto'};
    }
    ${PostCardContentTitle} {
      ${type === 'small' && 'font-size: 18px;'}
    }

    ${PostCardButton} {
      ${type === 'small' && 'width: 100%;'}
    }

    ${PostCardContent} {
      width: ${type === 'small' ? '100%' : '70%'};
      padding: ${type === 'small' ? theme.spacing(5) : theme.spacing(7)};
    }
    ${theme.breakpoints.down('sm')} {
      display: block;
      ${PostCardImageHolder} {
        width: 100%;
        height: 150px;
      }
      ${PostCardContentTitle} {
        font-size: 18px;
      }

      ${PostCardButton} {
        width: 100%;
      }

      ${PostCardContent} {
        width: 100%;
        padding: ${theme.spacing(5)};
      }
    }
  `}
`;

export const PostCardImageHolderInner = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const PostCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const PostCardContentDescription = styled(Text)<any>`
  ${({ theme }) => `
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    ${theme.breakpoints.down('lg')} {
          font-size: 14px; 
        }
  `};
`;
