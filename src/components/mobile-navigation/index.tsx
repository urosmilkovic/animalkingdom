import React from 'react';
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Feed,
  Home,
  ImportContacts,
  Info,
  LocalMall,
} from '@mui/icons-material';
import {
  MobileNavigationList,
  MobileNavigationLanguage,
  MobileNavigationLanguages,
} from 'components/mobile-navigation/styles';
import { useRouter } from 'next/router';
import { useLanguageContext } from 'context';

const MobileNavigation = ({ open, onClose }: any) => {
  const router = useRouter();

  const goTo = (location: any) => {
    router.push(location);
    onClose();
  };
  const { languages, changeLanguage, t } = useLanguageContext();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <MobileNavigationList>
        <ListItem disablePadding>
          <ListItemButton onClick={() => goTo('/')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={t`Home`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => goTo('/products')}>
            <ListItemIcon>
              <LocalMall />
            </ListItemIcon>
            <ListItemText primary={t`Products`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => goTo('/about-us')}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={t`About us`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => goTo('/contact-us')}>
            <ListItemIcon>
              <ImportContacts />
            </ListItemIcon>
            <ListItemText primary={t`Contact us`} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => goTo('/blog')}>
            <ListItemIcon>
              <Feed />
            </ListItemIcon>
            <ListItemText primary={t`Blog`} />
          </ListItemButton>
        </ListItem>
      </MobileNavigationList>
      <MobileNavigationLanguages>
        {languages.map((x: any, y: number) => (
          <MobileNavigationLanguage
            color="primary"
            variant="contained"
            key={x.code}
            onClick={() => changeLanguage(y)}
          >
            {x.code}
          </MobileNavigationLanguage>
        ))}
      </MobileNavigationLanguages>
    </Drawer>
  );
};

export default MobileNavigation;
