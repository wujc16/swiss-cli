import { add } from '@utils/math';
import React, { useState, useCallback } from 'react';
import { Button, InputNumber } from 'antd';
import styles from './index.scss';

export default function Home() {
  const [leftNum, setLeftNum] = useState(0);
  const [rightNum, setRightNum] = useState(0);
  const [result, setResult] = useState('?');

  const calculateAdd = useCallback(() => {
    setResult(String(add(leftNum, rightNum)));
  }, [leftNum, rightNum]);

  return (
    <div className={styles.home}>
      Home: Calculate, 计算下面加法
      <div className={styles.calculate}>
        <div className={styles.numberInput}>
          <InputNumber value={leftNum} onChange={setLeftNum} />
        </div>
        +
        <div className={styles.numberInput}>
          <InputNumber value={rightNum} onChange={setRightNum} />
        </div>
        =
        <div className={styles.numberInput}>
          {result}
        </div>
        <Button className={styles.numberInput} onClick={calculateAdd}>计算</Button>
      </div>
    </div>
  );
}
