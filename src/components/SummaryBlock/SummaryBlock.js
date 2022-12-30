import React, { useState, useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import PageControls from '../PageControls/PageControls';
import { FormContext } from '../App/App';


const SummaryBlock = () => {
  const [currentPage, setCurrentPage] = useOutletContext();
  const description = 'Double-check everything looks OK before confirming.';
  const data = useContext(FormContext);
  const totalPrice = () => {
    if (data.choosedPlan === 'Arcade') {
      return 10;
    }
    else if (data.choosedPlan === 'advanced') {
      return 12;
    }
    else {
      return 15;
    }
  };

  const plusAdditionals = data?.additionals.map(item => item.price).reduce((acc, val) => acc + val);

  return (
    <>
      <BlockHeader title='Finishing up' description={description} />
      <div>
        <span>{data.choosedPlan}</span>
        <span>({data.choosedPeriod})</span>
        <h3>User info:</h3>
        <p>{data.userInfo.name}</p>
        <p>{data.userInfo.email}</p>
        <p>{data.userInfo.phone}</p>
      </div>
      {
        data.additionals &&
        <div>
          {data.additionals.map(
            item =>
              <>
                <span>{item.title}</span>
                <span>{item.price}</span>
              </>
          )}
        </div>
      }
      <div>
        <span>Total</span>

        {data.additionals ?
          <span>{data.choosedPeriod === 'Monthly' ? (totalPrice() + plusAdditionals) : (totalPrice() * 12 + plusAdditionals)}
            $/{data.choosedPeriod === 'Monthly' ? 'mo' : 'year'}</span> :

          <span>{data.choosedPeriod === 'Monthly' ? totalPrice() : totalPrice() * 12}
            $/{data.choosedPeriod === 'Monthly' ? 'mo' : 'year'}</span>}
      </div>
      <PageControls
        changePage={setCurrentPage}
        currentPage={currentPage}
        path='/summary' />
    </>
  )
};

export default SummaryBlock;
