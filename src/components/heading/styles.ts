import styled from '@emotion/styled';

const variants: { [key: string]: number } = {
  h1: 64,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 18,
  h6: 16,
};

const smallVariants: { [key: string]: number } = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,
};

export const HeadingWrapper = styled.div<any>`
  ${({ theme, variant }) => `
    width: 100%;
    color: ${theme.palette.common.black};
    text-transform: uppercase;
    line-height: 1.4;
    margin: 0;
    font-weight: 700;
    font-size: ${variants[variant]}px;
    ${theme.breakpoints.down('md')} {
    font-size: ${smallVariants[variant]}px;
    }
  `}
`;
