import React, { useState } from 'react';
import { useStateContext } from '../context';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Footer = ({ role }) => {
  const navigate = useNavigate();

  const { addNewFarmer, addNewDistributor, addNewRetailer, addNewConsumer } = useStateContext();
  const [newRoleAddress, setNewRoleAddress] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      switch (role) {
        case 'farmer':
          await addNewFarmer(newRoleAddress);
          break;
        case 'distributor':
          await addNewDistributor(newRoleAddress);
          break;
        case 'retailer':
          await addNewRetailer(newRoleAddress);
          break;
        case 'consumer':
          await addNewConsumer(newRoleAddress);
          break;
        default:
          // Handle default case or do nothing
          break;
      }
    } catch (error) {
      console.error('Error adding new role:', error);
      toast('Error adding new role', { type: 'error' });
    }
  };

  const handleAddressChange = (e) => {
    setNewRoleAddress(e.target.value);
  };

  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full p-4 md:py-8">
        <div className="flex justify-between max-w-screen-xl mx-auto">
          <div className="sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"  onClick={()=>navigate("/")}>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Ace Coffee Suppliers</span>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="https://github.com/kundanKP35/FinalYear_CoffeeSupplyChain" target="__blank" className="hover:underline me-4 md:me-6">Github</a>
              </li>
              <li>
                <a href="/about" target="__blank" className="hover:underline me-4 md:me-6">About Us</a>
              </li>
            </ul>
          </div>
          <div className="sm:items-center sm:justify-end">
            <p>Add a new {role} to the network:</p>
            <form onSubmit={handleFormSubmit} className="flex">
              <input type="text" value={newRoleAddress} onChange={handleAddressChange} className="border border-gray-300 rounded-l px-4 py-2 text-black" placeholder={`Enter new ${role} address`} />
              <button type="submit" className="bg-blue-500 text-white font-semibold rounded-r px-4 py-2">Add {role}</button>
            </form>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Ace Coffee Suppliers</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
