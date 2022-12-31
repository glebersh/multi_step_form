import { Checkbox } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import PageControls from '../PageControls/PageControls';
import './AdditionalsBlock.css';
import { FormContext } from '../App/App';


const AdditionalsBlock = ({ addAdditional }) => {

  const data = useContext(FormContext);
  const [currentPage, setCurrentPage] = useOutletContext();
  const description = 'Add-ons helps enhance your gaming experience.';

  return (
    <>
      <BlockHeader title='Pick add-ons' description={description} />
      <div className='additionals-container'>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' onChange={() => addAdditional({ title: 'Online service', price: 1 })}
            size='lg' isChecked={!!(data?.additionals.find(el => el.title === 'Online service') !== undefined)} />
          <div className='additional-description'>
            <span>Online service</span>
            <span>Access to multiplayer games</span>
          </div>
          <span>+$1/mo</span>
        </div>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' onChange={() => addAdditional({ title: 'Larger storage', price: 2 })}
            size='lg' isChecked={!!(data?.additionals.find(el => el.title === 'Larger storage') !== undefined)} />
          <div className='additional-description'>
            <span>Larger storage</span>
            <span>Extra 1TB of cloud save</span>
          </div>
          <span>+$2/mo</span>
        </div>
        <div className='additionals-card'>
          <Checkbox borderColor='darkblue' onChange={() => addAdditional({ title: 'Customize profile', price: 2 })}
            size='lg' isChecked={!!(data?.additionals.find(el => el.title === 'Customize profile') !== undefined)} />
          <div className='additional-description'>
            <span>Customize profile</span>
            <span>Custom theme on your profile</span>
          </div>
          <span>+$2/mo</span>
        </div>
      </div>
      <PageControls
        complete={true}
        changePage={setCurrentPage}
        currentPage={currentPage}
        path='/summary' />
    </>
  )
};

export default AdditionalsBlock;