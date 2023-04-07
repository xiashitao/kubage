import React, { useState, useMemo, createContext } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from '@/components/Layout';

import '@/styles/globals.scss';

export const GlobalContext = createContext({
  isLogin: false,
  showNavigation: false,
  toggleColorMode: () => {},
  toggleIsLogin: () => {},
  toggleNavigation: () => {}
});

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const [isLogin, setIsLogin] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const globalContext = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
      toggleIsLogin: () => {
        setIsLogin(prevLogin => !prevLogin);
      },
      toggleNavigation: () => {
        setShowNavigation(prevShow => !prevShow);
      }
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode
        }
      }),
    [colorMode]
  );

  return (
    <>
      <Head>
        <title>Kubeedge Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalContext.Provider
        value={{ ...globalContext, isLogin, showNavigation }}
      >
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </GlobalContext.Provider>
    </>
  );
}
