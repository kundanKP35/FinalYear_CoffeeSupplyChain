import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';
// import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xf137adF7f43EF19CBE12DC0CB1003bC07FAFbD2c');

  const address = useAddress();
  const connect = useMetamask();

  const getCoffeeDetail1 = async (upc) => {
        try {
            const coffeeDetail = await contract.call('fetchItemBufferOne',[upc]);
            console.log("contract call success",coffeeDetail)
            return coffeeDetail;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    } 

    // Farmer Roles
    const addNewFarmer = async (id) => {
        try {
            const result = await contract.call('addFarmer',[id]);
            console.log("contract call success",result)
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            connect,
            getCoffeeDetail1,
            addNewFarmer
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);