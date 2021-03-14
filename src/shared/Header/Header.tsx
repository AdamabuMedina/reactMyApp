import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBLock } from './SortBlock/SortBLock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBLock />
    </header>
  );
};