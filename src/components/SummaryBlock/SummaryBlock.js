import React, { useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import { FormContext } from '../App/App';
import { Alert, AlertIcon } from '@chakra-ui/react';

import './SummaryBlock.css';
import PageControls from '../PageControls/PageControls';


const SummaryBlock = () => {
  const [currentPage, setCurrentPage] = useOutletContext();
  const [confirmed, setConfirming] = useState(false);
  const description = 'Double-check everything looks OK before confirming.';

  const data = useContext(FormContext);
  const totalPrice = () => {
    switch (data.choosedPlan) {
      case ('Arcade'): return 9;
      case ('Advanced'): return 12;
      default: return 15;
    }
  };
  const plusAdditionals = data?.additionals.map(item => item.price).reduce((acc, val) => acc + val);

  return (
    <>
      {confirmed ?

        <Alert status='success'>
          <AlertIcon />
          Thank you for your purchase! Enjoy!
        </Alert>
        :
        <>
          <BlockHeader title='Finishing up' description={description} />
          <div className='main-info'>
            <div>
              <h3>Tariff: </h3>
              <span>{data.choosedPlan} </span>
              <span>({data.choosedPeriod})</span>
            </div>
            <div>
              <h3>User info:</h3>
              <p>Name: {data.userInfo.name}</p>
              <p>Email: {data.userInfo.email}</p>
              <p>Phone: {data.userInfo.phone}</p>
            </div>
          </div>
          {
            data.additionals &&
            <div className='additionals-block'>
              {data.additionals.map(
                item =>
                  <div key={item.title}>
                    <span>{item.title}</span>
                    <span>+{item.price} $</span>
                  </div>
              )}
            </div>
          }
          <div className='total-block'>
            <div>
              <h3 className='total-price'>Total: </h3>
              {data.additionals ?
                <span>{data.choosedPeriod === 'Monthly' ? (totalPrice() + plusAdditionals) : (totalPrice() * 12 + plusAdditionals)}
                  $/{data.choosedPeriod === 'Monthly' ? 'mo' : 'year'}</span> :

                <span>{data.choosedPeriod === 'Monthly' ? totalPrice() : totalPrice() * 12}
                  $/{data.choosedPeriod === 'Monthly' ? 'mo' : 'year'}</span>}
            </div>
            <button onClick={() => setConfirming(true)}
              className='confirm-button'>Confirm purchase</button>
          </div>
        </>
      }
      <PageControls
        changePage={setCurrentPage}
        currentPage={currentPage}
        complete={false} />
    </>
  )
};

export default SummaryBlock;
