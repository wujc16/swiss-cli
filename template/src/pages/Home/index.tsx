import { add } from '@utils/math';
import React from 'react';
import styles from './index.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      Home Test
      <p className={styles.calculate}>
        {`加法: 1 + 1 = ${add(1, 1)}`}
      </p>
    </div>
  );
}
