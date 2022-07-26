import React from 'react';
import { PageLayout } from 'layouts';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from 'ssr/create-emotion-cache';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from 'theme';
import { RegisteredCache, SerializedStyles, StyleSheet } from '@emotion/utils';
import { Footer, Navigation, ScrollToTop, PageLoader } from 'components';
import { EventContextProvider } from 'context';
import { LanguageContextProvider } from 'context/language';

const clientSideEmotionCache = createEmotionCache();

type AppType = {
  Component: React.ElementType;
  pageProps: any;
  emotionCache: {
    inserted: { [key: string]: string | true };
    registered: RegisteredCache;
    sheet: StyleSheet;
    key: string;
    insert: (
      selector: string,
      serialized: SerializedStyles,
      sheet: StyleSheet,
      shouldCache: boolean
    ) => string | void;
  };
};

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppType) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={Theme}>
      <EventContextProvider>
        <LanguageContextProvider>
          <CssBaseline />
          <PageLoader />
          <Navigation />
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
          <ScrollToTop />
          <Footer />
        </LanguageContextProvider>
      </EventContextProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default MyApp;
