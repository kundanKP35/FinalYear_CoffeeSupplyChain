import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import CoffeeOriginDetails from "../components/CoffeeOriginDetails";
import CoffeeChainDetails from "../components/CoffeeChainDetails";
import logo from "../assets/logo2.png";
import banner from "../assets/banner4.jpeg";
import TransactionHistory from '../components/Transactions';


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative sm:-8 max-w-screen flex flex-row bg-cover bg-center mx-auto"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-[100px] min-w-screen-xl mx-48 font-[1000] mt-12 mb-32 text-white">
          Ace <br /> Coffee <br /> Suppliers
        </h1>
      </div>
      <div className="flex justify-around text-white ontainer max-w-screen-xl mx-auto py-28">
        <CoffeeOriginDetails />
        <CoffeeChainDetails />
      </div>
      <TransactionHistory/>
      <footer className="bg-white border-gray-200 dark:bg-gray-900 text-white">
        <div className="w-full  p-4 md:py-8">
          <div className="flex justify-between max-w-screen-xl mx-auto">
            <div className=" sm:items-center sm:justify-between">
              <div
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                onClick={() => navigate("/")}
              >
                {/* <img src={logo} className="h-8" alt="Flowbite Logo" /> */}
                <img src={logo} alt="Logo" className="w-40 h-16" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Ace Coffee Suppliers
                </span>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Ace Coffee Suppliers
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
