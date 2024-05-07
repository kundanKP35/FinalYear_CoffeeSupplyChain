import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import CoffeeOriginDetails from '../components/CoffeeOriginDetails';
import CoffeeChainDetails from '../components/CoffeeChainDetails';

const Home = () => {

  return (
    <div className='flex justify-around'>
      <CoffeeOriginDetails />
      <CoffeeChainDetails />
    </div>
  );
};

export default Home;
