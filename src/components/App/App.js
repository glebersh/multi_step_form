import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../pages/Layout/Layout';
import AdditionalsBlock from '../AdditionalsBlock/AdditionalsBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import OptionsBlock from '../OptionsBlock/OptionsBlock';
import './App.css';

const App = () => {
  const [choosedPlan, setChoosedPlan] = useState('');
  const [choosedPeriod, setChoosedPeriod] = useState('monthly');
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<InfoBlock />} />
          <Route path='/options' element={<OptionsBlock
            choosedPlan={choosedPlan}
            setChoosedPlan={setChoosedPlan}
            choosedPeriod={choosedPeriod}
            setChoosedPeriod={setChoosedPeriod} />} />
          <Route path='/additionals' element={<AdditionalsBlock />} />
        </Route>
      </Routes>
    </div >
  )
};

export default App;