import React from 'react';
import {
  FirstSection,
  FooterColumn,
  FooterColumnNavigation,
  FooterColumnTitle,
  FooterMain,
  SecondSection,
  SecondSectionInner,
  ThirdSection,
  ThirdSectionInner,
  FooterBackground,
  FooterColumnNavigationInline,
  FooterContainer,
  FooterHeading,
  FooterLink,
  FooterLogo,
  FooterLogoImage,
} from 'components/footer/styles';
import { Button, Text, Image } from 'components';
import {
  ArrowForward,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import NextLink from 'next/link';
import { useLanguageContext } from 'context';

const Footer = () => {
  const { t } = useLanguageContext();

  return (
    <FooterMain>
      <FooterBackground>
        <FooterLogoImage src="/assets/images/footer.png" alt="Overlay" />
      </FooterBackground>
      <FooterContainer>
        <FirstSection spacing={10}>
          <FooterLogo>
            <Image src="/assets/images/logo.png" alt="AnimalKingdom" />
          </FooterLogo>
          <FooterHeading variant="h2">{t`Want to contact us?`}</FooterHeading>
          <Text>
            {t`If you are interested in our products and would like to find out some more information, one of our advisors is excited to help.`}
          </Text>
          <NextLink href="/become-a-partner">
            <Button
              color="primary"
              variant="contained"
              endIcon={<ArrowForward />}
            >
              {t`Contact Us`}
            </Button>
          </NextLink>
        </FirstSection>

        <SecondSection spacing={10}>
          <SecondSectionInner>
            <FooterColumn>
              <FooterColumnTitle>Pages</FooterColumnTitle>
              <FooterColumnNavigation>
                <FooterLink href="/" inline>
                  {t`Home`}
                </FooterLink>
                <FooterLink href="/products" inline>
                  {t`Products`}
                </FooterLink>
                <FooterLink href="/about-us" inline>
                  {t`About us`}
                </FooterLink>
                <FooterLink href="/contact-us" inline>
                  {t`Contact us`}
                </FooterLink>
                <FooterLink href="/blog" inline>
                  {t`Blog`}
                </FooterLink>
              </FooterColumnNavigation>
            </FooterColumn>
            <FooterColumn>
              <FooterColumnTitle>{t`About us`}</FooterColumnTitle>
              <FooterColumnNavigation>
                <FooterLink href="/about-us" inline>
                  {t`Who we are`}
                </FooterLink>
                <FooterLink href="/about-us" inline>
                  {t`Industries`}
                </FooterLink>
                <FooterLink href="/about-us" inline>
                  {t`Careers`}
                </FooterLink>
              </FooterColumnNavigation>
            </FooterColumn>
            <FooterColumn>
              <FooterColumnTitle>{t`Support`}</FooterColumnTitle>
              <FooterColumnNavigation>
                <FooterLink href="/" inline>
                  {t`Support Request`}
                </FooterLink>
                <FooterLink href="/" inline>
                  {t`Book a call`}
                </FooterLink>
                <FooterLink href="/" inline>
                  {t`Contact`}
                </FooterLink>
              </FooterColumnNavigation>
            </FooterColumn>
            <FooterColumn>
              <FooterColumnTitle>{t`Follow Us`}</FooterColumnTitle>
              <FooterColumnNavigationInline>
                <FooterLink href="/" inline>
                  <Facebook />
                </FooterLink>
                <FooterLink href="/" inline>
                  <LinkedIn />
                </FooterLink>
                <FooterLink href="/" inline>
                  <Instagram />
                </FooterLink>
                <FooterLink href="/" inline>
                  <Twitter />
                </FooterLink>
              </FooterColumnNavigationInline>
            </FooterColumn>
          </SecondSectionInner>
        </SecondSection>
        <ThirdSection spacing={3}>
          <ThirdSectionInner>
            <Text>
              &copy; {new Date().getFullYear()} AnimalKingdom. All rights
              reserved.
            </Text>
            <Text>Privacy Policy</Text>
          </ThirdSectionInner>
        </ThirdSection>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
