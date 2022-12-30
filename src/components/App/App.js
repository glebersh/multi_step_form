import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../pages/Layout/Layout';
import AdditionalsBlock from '../AdditionalsBlock/AdditionalsBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import OptionsBlock from '../OptionsBlock/OptionsBlock';
import SummaryBlock from '../SummaryBlock/SummaryBlock';
import './App.css';

export const FormContext = React.createContext();

const App = () => {
  const [choosedPlan, setChoosedPlan] = useState('');
  const [choosedPeriod, setChoosedPeriod] = useState('monthly');
  const [additionals, setAdditionals] = useState([]);
  const [userInfo, setUser] = useState({});

  const addAdditional = (item) => {
    let updatedArray = [...additionals];
    const indexElement = updatedArray.find(el => el.title === item.title);

    if (indexElement !== undefined) {
      setAdditionals(updatedArray.filter(el => el.title !== item.title))
    }
    else if (indexElement === undefined || additionals === []) {
      updatedArray.push(item);
      setAdditionals(updatedArray);
    }
  };

  return (
    <div className='app'>
      <FormContext.Provider value={{ choosedPlan, choosedPeriod, additionals, userInfo }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<InfoBlock setUser={setUser} />} />
            <Route path='/options' element={<OptionsBlock
              choosedPlan={choosedPlan}
              setChoosedPlan={setChoosedPlan}
              choosedPeriod={choosedPeriod}
              setChoosedPeriod={setChoosedPeriod} />} />
            <Route path='/additionals'
              element={<AdditionalsBlock
                addAdditional={addAdditional} />} />
            <Route path='/summary'
              element={<SummaryBlock />} />
          </Route>
        </Routes>
      </FormContext.Provider>
    </div >
  )
};

export default App;