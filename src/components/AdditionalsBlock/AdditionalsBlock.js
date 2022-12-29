import { Checkbox } from '@chakra-ui/react';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import PageControls from '../PageControls/PageControls';
import './AdditionalsBlock.css';

const AdditionalsBlock = () => {
  const [currentPage, setCurrentPage] = useOutletContext();
  const description = 'Add-ons helps enhance your gaming experience.';

  return (
    <>
      <BlockHeader title='Pick add-ons' description={description} />
      <div className='additionals-container'>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' />
          <div>
            <span>Online service</span>
            <span>Access to multiplayer games</span>
          </div>
          <span>+$1/mo</span>
        </div>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' />
          <div>
            <span>Larger storage</span>
            <span>Extra 1TB of cloud save</span>
          </div>
          <span>+$2/mo</span>
        </div>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' />
          <div>
            <span>Customize profile</span>
            <span>Custom theme on your profile</span>
          </div>
          <span>+$2/mo</span>
        </div>
      </div>
      <PageControls
        changePage={setCurrentPage}
        currentPage={currentPage}
        path='/options' />
    </>
  )
};

export default AdditionalsBlock;