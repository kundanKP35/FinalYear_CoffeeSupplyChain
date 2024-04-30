import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import CoffeeDetails from '../components/CoffeeDetails';

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <CoffeeDetails />
    </div>
  );
};

export default Home;
