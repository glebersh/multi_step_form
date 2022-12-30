import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import BlockHeader from '../BlockHeader/BlockHeader';
import PageControls from '../PageControls/PageControls';
import './InfoBlock.css';


const InfoBlock = ({ setUser }) => {
  const [currentPage, setCurrentPage] = useOutletContext();
  const description = 'Please provide your personal name, email address, and phone number.';
  const [isComplete, setComplete] = useState(false);

  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [phoneInputValue, setPhoneInputValue] = useState('');

  useEffect(() => {
    if (nameInputValue !== "" && emailInputValue !== "" && phoneInputValue !== "") {
      setComplete(true);
    }
    else {
      setComplete(false);
    }
  }, [nameInputValue, emailInputValue, phoneInputValue]);

  const saveInfo = (e) => {
    e.preventDefault();
    setUser({ name: nameInputValue, email: emailInputValue, phone: phoneInputValue });
  };

  return (
    <>
      <BlockHeader title='Personal info' description={description} />
      <form className='info-form' onSubmit={(e) => saveInfo(e)}>
        <label htmlFor='name-input'>Name</label>
        <input type='text' id='name-input'
          onChange={(e) => setNameInputValue(e.target.value)}
          value={nameInputValue}
          required></input>
        <label htmlFor='email-input'>Email Address</label>
        <input type='email' id='email-input'
          onChange={(e) => setEmailInputValue(e.target.value)}
          value={emailInputValue}
          required></input>
        <label htmlFor='phone-input'>Phone number</label>
        <input type='tel' id='phone-input'
          onChange={(e) => setPhoneInputValue(e.target.value)}
          value={phoneInputValue}
          required></input>
        <input type='submit' value='Save info' />
      </form >
      <PageControls
        changePage={setCurrentPage}
        currentPage={currentPage}
        complete={isComplete}
        path='/options' />
    </>
  )
};

export default InfoBlock;
