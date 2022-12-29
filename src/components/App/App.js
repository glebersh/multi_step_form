import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../pages/Layout/Layout';
import InfoBlock from '../InfoBlock/InfoBlock';
import NavigationBlock from '../NavigationBlock';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<InfoBlock />} />
        </Route>
      </Routes>
    </div >
  )
};

export default App;