import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';
import CoffeeDetails1 from '../components/CoffeeDetails1';

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <CoffeeDetails1 />
    </div>
  );
};

export default Home;
