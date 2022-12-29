import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PageControls.css';

const PageControls = ({ changePage, currentPage, complete, path }) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
    changePage(currentPage - 1);
  };

  return (
    <div className='buttons-container'>
      {currentPage != 1 ?
        <div className='previous-page-btn' onClick={() => navigateBack()}>
          Go Back
        </div> : null}
      <div className={complete ? 'next-page-btn' : 'next-page-btn disabled'}>
        <Link to={path} onClick={() => changePage(currentPage + 1)}> Next Step</Link>
      </div>
    </div >
  )
};

export default PageControls;