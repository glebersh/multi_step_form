import { Switch } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import PageControls from '../PageControls/PageControls';
import './OptionsBlock.css';

const OptionsBlock = ({ choosedPlan, setChoosedPlan, choosedPeriod, setChoosedPeriod }) => {
  const [currentPage, setCurrentPage] = useOutletContext();
  const description = 'You have the option of monthly or yearly billing.';
  const baseClass = 'option-card';

  const changePlan = () => {
    if (choosedPeriod === 'monthly') {
      setChoosedPeriod('yearly');
    }
    else setChoosedPeriod('monthly');
  };

  return (
    <>
      <BlockHeader title='Select your plan' description={description} />
      <div className='cards-container'>
        <div
          className={choosedPlan === 'arcade' ? `${baseClass} + choosen` : baseClass}
          onClick={() => setChoosedPlan('arcade')}>
          <img src='./images/icon-arcade.svg'
            className='option-card-img' />
          <span>Arcade</span>
          <span>{choosedPeriod === 'monthly' ? '$9/mo' : '$108/year'}</span>
        </div>
        <div className={choosedPlan === 'advanced' ? `${baseClass} + choosen` : baseClass}
          onClick={() => setChoosedPlan('advanced')}>
          <img src='./images/icon-advanced.svg'
            className='option-card-img' />
          <span>Advanced</span>
          <span>{choosedPeriod === 'monthly' ? '$12/mo' : '$144/year'}</span>
        </div>
        <div className={choosedPlan === 'pro' ? `${baseClass} + choosen` : baseClass}
          onClick={() => setChoosedPlan('pro')}>
          <img src='./images/icon-pro.svg'
            className='option-card-img' />
          <span>Pro</span>
          <span>{choosedPeriod === 'monthly' ? '$15/mo' : '$180/year'}</span>
        </div>
      </div>
      <div className='period-option-container'>
        <span className={choosedPeriod === 'monthly' ? 'choosen-period' : ''}>Monthly</span>
        <Switch onChange={() => changePlan()} isChecked={choosedPeriod === 'monthly' ? false : true} />
        <span className={choosedPeriod === 'yearly' ? 'choosen-period' : ''}>Yearly</span>
      </div>
      <PageControls
        changePage={setCurrentPage}
        currentPage={currentPage}
        complete={choosedPlan !== '' ? true : false}
        path='/additionals' />
    </>
  )
};

export default OptionsBlock;