import React, { useState, useMemo, createContext, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import api from '../api';
import '@/styles/globals.scss';

export const GlobalContext = createContext({
  isLogin: false,
  showNavigation: false,
  toggleColorMode: () => {},
  toggleIsLogin: () => {},
  toggleNavigation: () => {}
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // if (pageProps.noLogin && router.pathname !== '/login') {
  //   return null;
  // }
  // if (!pageProps.noLogin && router.pathname === '/login') {
  //   return null;
  // }

  let redirct = false;
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  const [isLogin, setIsLogin] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const globalContext = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          globalThis.window?.localStorage.setItem('colorMode', newMode);
          return newMode;
        });
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

  useEffect(() => {
    const localColorMode = globalThis.window?.localStorage.getItem('colorMode');
    if (localColorMode) {
      setColorMode(localColorMode as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    redirct = false;
    const token = globalThis.document?.cookie
      ?.split('; ')
      ?.find(row => row.startsWith('token='))
      ?.split('=')[1];

    if (token && !isLogin) {
      fetch(api.nodes, {
        method: 'get',
        headers: {
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.apiVersion) {
            setIsLogin(true);
            if (router.pathname === '/login') {
              router.push('/overview');
              redirct = true;
            }
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } else if (!token) {
      setIsLogin(false);
      redirct = true;
      if (router.pathname !== '/login') {
        router.push('/login');
      }
    }
  }, [router.pathname]);

  return redirct ? null : (
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

// App.getInitialProps = async ({ Component, ctx }: any) => {
//   let noLogin = true;
//   const token = globalThis.document?.cookie
//     ?.split('; ')
//     ?.find(row => row.startsWith('token='))
//     ?.split('=')[1];

//   if (token) {
//     fetch(api.nodes, {
//       method: 'get',
//       headers: {
//         Authorization: token
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.apiVersion) {
//           noLogin = false;
//           // if (ctx.pathname === '/login') {
//           //   ctx.push('/overview');
//           // }
//           globalThis.window.location.href = '/overview';
//         }
//       })
//       .catch(err => {
//         console.log('err', err);
//       });
//   } else if (ctx.pathname !== '/login') {
//     globalThis.window.location.href = '/login';
//     // ctx.push('/login');
//   }
//   return {
//     Component,
//     pageProps: {
//       ...(Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {}),
//       noLogin
//     }
//   };
// };

export default App;
