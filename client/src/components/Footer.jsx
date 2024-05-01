import React from 'react';
import logo from '../assets/logo.svg'; 

const Footer = ({role}) => {
  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full  p-4 md:py-8">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <div className=" sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* <img src={logo} className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Ace Coffee Suppliers</span>
          </div>
          <ul className="flex flex-wrap justify-between items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Github</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div className=" sm:items-center sm:justify-end">
          <p>Add a new {role} to the network:</p>
          <form className="flex">
            <input type="text" className="border border-gray-300 rounded-l px-4 py-2" placeholder={`Enter new ${role} ID`} />
            <button type="submit" className="bg-blue-500 text-white font-semibold rounded-r px-4 py-2">Add {role}</button>
          </form>
        </div>
      </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">Ace Coffee Suppliers</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
