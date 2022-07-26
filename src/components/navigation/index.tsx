import React, { useState } from 'react';
import {
  NavigationMain,
  NavigationInner,
  NavigationLogo,
  NavigationLogoImage,
  NavigationActions,
  NavigationItems,
  NavigationItem,
  NavigationLanguages,
  NavigationLanguage,
  NavigationLogoImageBig,
  NavigationHamburger,
} from 'components/navigation/styles';
import { MobileNavigation } from 'components';
import { useEventContext, useLanguageContext } from 'context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from '@mui/icons-material';

function Navigation() {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const { scroll } = useEventContext();
  const { languages, changeLanguage, t } = useLanguageContext();
  const { pathname } = useRouter();

  const resizeNavbar =
    scroll.y > 200 || ['/products/[id]', '/blog/[id]'].includes(pathname);

  return (
    <>
      <NavigationMain resizeNavbar={resizeNavbar}>
        <NavigationInner>
          <Link href="/">
            <NavigationLogo resizeNavbar={resizeNavbar}>
              <NavigationLogoImage src="/assets/images/logo.png" />
              <NavigationLogoImageBig src="/assets/images/logo-big.png" />
            </NavigationLogo>
          </Link>
          <NavigationActions>
            <NavigationItems>
              <NavigationItem href="/">{t`Home`}</NavigationItem>
              <NavigationItem href="/products">{t`Products`}</NavigationItem>
              <NavigationItem href="/about-us">{t`About us`}</NavigationItem>
              <NavigationItem href="/contact-us">{t`Contact us`}</NavigationItem>
              <NavigationItem href="/blog">{t`Blog`}</NavigationItem>
            </NavigationItems>
            <NavigationLanguages>
              {languages.map((x: any, y: number) => (
                <NavigationLanguage
                  color="primary"
                  variant="contained"
                  key={x.code}
                  onClick={() => changeLanguage(y)}
                >
                  {x.code}
                </NavigationLanguage>
              ))}
            </NavigationLanguages>
          </NavigationActions>
          <NavigationHamburger onClick={onOpen}>
            <Menu />
          </NavigationHamburger>
        </NavigationInner>
      </NavigationMain>
      <MobileNavigation open={open} onClose={onClose} />
    </>
  );
}

export default Navigation;
