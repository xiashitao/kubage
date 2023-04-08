import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useRouter } from 'next/router';

import { GlobalContext } from '@/pages/_app';

export default function TopAppBar() {
  const theme = useTheme();
  const router = useRouter();
  const { isLogin, toggleIsLogin, toggleColorMode, toggleNavigation } =
    React.useContext(GlobalContext);

  const handleClick = () => {
    const pastDate = new Date(0);
    globalThis.document.cookie = 'token=; expires=' + pastDate.toUTCString();
    console.log(document.cookie);
    toggleIsLogin();
    router.push('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleNavigation}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kubeedge Dashboard
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <Button color="inherit" onClick={handleClick}>
            {isLogin ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
