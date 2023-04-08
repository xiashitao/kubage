import type { ReactElement } from 'react';
import Paper from '@mui/material/Paper';

import TopAppBar from './TopAppBar';
import styles from '@/styles/layout.module.scss';
import Navigation from '@/components/Navigation';
import { NavItems } from './constants';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <TopAppBar />
      <div className={styles.appContent}>
        <Navigation navItems={NavItems} defaultSelectedName="Overview" />
        <Paper square className={styles.main}>
          {children}
        </Paper>
      </div>
    </>
  );
}
