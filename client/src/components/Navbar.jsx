import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";
import logo2 from '../assets/logo2.png';
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();

  const handleConnectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.log("Error connecting wallet:", error);
      toast("Error connecting wallet", { type: "error" })
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="" onClick={()=>navigate("/")}>

            <img
              src={logo2}
              alt="Logo"
              className="h-16 w-40"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ace Coffee Suppliers
            </span> */}
            </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              onClick={()=> navigate('/about')}
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              About Us
            </a>
            <div className="sm:flex hidden flex-row justify-end gap-4">
              <CustomButton
                btnType="button"
                title={address ? "Connected" : "Connect Wallet"}
                styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                handleClick={handleConnectWallet}
              />
            </div>
          </div>
        </div>
      </nav>
      {address && (
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <button
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                    onClick={()=> navigate('/farmer')}
                  >
                    Farmer
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-900 dark:text-white hover:underline"
                    onClick={()=> navigate('/distributor')}

                  >
                    Distributor
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-900 dark:text-white hover:underline"
                    onClick={()=> navigate('/retailer')}

                  >
                    Retailer
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-900 dark:text-white hover:underline"
                    onClick={()=> navigate('/consumer')}

                  >
                    Consumer
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {/* <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6"> */}
      {/* <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        {/* Input and search button */}
      {/* </div> */}

      {/* Small screen navigation */}
      {/* <div className="sm:hidden flex justify-between items-center relative"> */}
      {/* Logo, menu icon, and drawer */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
