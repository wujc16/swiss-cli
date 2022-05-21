import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routers } from './router';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <BrowserRouter basename='/'>
      <Header />
      <div style={{ height: '500px' }}>
        <Routes>
          {
            routers.map(item => (
              <Route path={item.path} key={item.path} element={<item.component />} />
            ))
          }
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
