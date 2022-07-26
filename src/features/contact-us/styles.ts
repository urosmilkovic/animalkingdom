import styled from '@emotion/styled';
import { Button, Card, Container, Heading } from 'components';
import { TextField } from '@mui/material';

export const ContactUsPageMain = styled.div`
  width: 100%;
`;

export const ContactUsPageContent = styled(Container)`
  ${({ theme }) => `
    padding: ${theme.spacing(10)} ${theme.spacing(5)};
    display: flex;
    gap: ${theme.spacing(10)};
    ${theme.breakpoints.down('sm')} {
      flex-wrap: wrap;
    }
  `}
`;

export const ContactUsPageInfo = styled.div<any>`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(5)};
  `}
`;

export const ContactUsPageForm = styled(Card)`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(5)};
  `}
`;

export const ContactUsPageInput = styled(TextField)<any>`
  ${({ theme }) => `
    margin: ${theme.spacing(2)} 0;
  `}
`;

export const ContactUsPageSubmit = styled(Button)<any>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(5)};
  `}
`;

export const ContactUsPageHeading = styled(Heading)<any>`
  ${({ theme }) => `
    margin-bottom: ${theme.spacing(5)};
  `}
`;

export const ContactUsPageInfoSingle = styled.div<any>`
  ${({ theme }) => `
    margin: ${theme.spacing(2)} 0px;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${theme.palette.common.black};
    font-size: 14px;
  `}
`;

export const ContactUsPageInfoAll = styled.div<any>`
  ${({ theme }) => `
    margin-top: ${theme.spacing(10)};
  `}
`;

export const ContactUsPageInfoSingleSvg = styled.div<any>`
  ${({ theme }) => `
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(3)};
    color: ${theme.palette.primary.main};
    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;
