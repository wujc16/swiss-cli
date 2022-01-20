import { add } from '@utils/math';
import React from 'react';

export default function Home() {
  return (
    <div>
      Home Test
      <p>
        {`加法: 1 + 1 = ${add(1, 1)}`}
      </p>
    </div>
  );
}
