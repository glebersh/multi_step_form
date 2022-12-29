import React from 'react';
import { Link } from 'react-router-dom';
import './PageControls.css';

const PageControls = ({ currentPage, complete }) => {
  return (
    <div className='buttons-container'>
      {currentPage != 1 ?
        <div className='previous-page-btn'>
          <Link>Go Back</Link>
        </div> : null}
      <div className={complete ? 'next-page-btn' : 'next-page-btn disabled'}>
        <Link>Next Step</Link>
      </div>
    </div>
  )
};

export default PageControls;