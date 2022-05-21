import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/home" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
