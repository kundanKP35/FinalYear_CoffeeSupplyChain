import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { useStateContext } from '../context';

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  const handleConnectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.log('Error connecting wallet:', error);
    }
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        {/* Input and search button */}
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        {/* Connect wallet button */}
        <CustomButton 
          btnType="button"
          title={address ? 'Connected' : 'Connect Wallet'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={handleConnectWallet}
        />
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        {/* Logo, menu icon, and drawer */}
      </div>
    </div>
  );
};

export default Navbar;
