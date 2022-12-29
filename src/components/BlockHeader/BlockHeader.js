import React from 'react';
import './BlockHeader.css';

const BlockHeader = ({ title, description }) => {
  return (
    <>
      <h1 className='block-title'>{title}</h1>
      <p className='block-description'>{description}</p>
    </>
  )
};

export default BlockHeader;