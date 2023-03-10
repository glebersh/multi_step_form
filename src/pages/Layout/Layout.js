import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBlock from '../../components/NavigationBlock';
import './Layout.css';

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='route-container'>
      <NavigationBlock currentPage={currentPage} />
      <div className='outlet-wrapper'>
        <Outlet context={[currentPage, setCurrentPage]} />
      </div>
    </div>
  )
};

export default Layout;