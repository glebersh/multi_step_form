import React, { useState } from 'react';
import './NavigationBlock.css';

const NavigationBlock = ({ pageHandler, currentPage }) => {
  const baseClass = 'navigation__item__page-number';
  return (
    <nav className='navigation'>
      <div className='navigation__item'>
        <span className={currentPage === 1 ?
          `${baseClass} + active` : baseClass}
          onClick={() => pageHandler(1)}>1</span>
        <div className='navigation__item__page-descr'>
          <span className='navigation__item__page_step'>Step 1</span>
          <span className='navigation__item__descr-text'>Your info</span>
        </div>
      </div >
      <div className='navigation__item'>
        <span className={currentPage === 2 ?
          `${baseClass} + active` : baseClass}
          onClick={() => pageHandler(2)}>2</span>
        <div className='navigation__item__page-descr'>
          <span className='navigation__item__page_step'>Step 2</span>
          <span className='navigation__item__descr-text'>Select plan</span>
        </div>
      </div>
      <div className='navigation__item'>
        <span className={currentPage === 3 ?
          `${baseClass} + active` : baseClass}
          onClick={() => pageHandler(3)}>3</span>
        <div className='navigation__item__page-descr'>
          <span className='navigation__item__page_step'>Step 3</span>
          <span className='navigation__item__descr-text'>Add-ons</span>
        </div>
      </div>
      <div className='navigation__item'>
        <span className={currentPage === 4 ?
          `${baseClass} + active` : baseClass}
          onClick={() => pageHandler(4)}>4</span>
        <div className='navigation__item__page-descr'>
          <span className='navigation__item__page_step'>Step 4</span>
          <span className='navigation__item__descr-text'>Summary</span>
        </div>
      </div>
    </nav >
  )
};

export default NavigationBlock;