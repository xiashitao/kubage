import type { ReactElement } from 'react';
import Paper from '@mui/material/Paper';

import TopAppBar from './TopAppBar';
import styles from '@/styles/layout.module.scss';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <TopAppBar />
      <Paper className={styles.main}>{children}</Paper>
    </>
  );
}
