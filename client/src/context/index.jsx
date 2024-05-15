import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite, Web3Button } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x033f3FAA45526BD9eefD13d0AcD070d0E13EaF54');

  const address = useAddress();
  const connect = useMetamask();

  const getCoffeeOriginDetail = async (upc) => {
        try {
            const coffeeDetail = await contract.call('fetchItemBufferOne',[upc]);
            console.log("contract call success",coffeeDetail)
            return coffeeDetail;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    } 

  const getCoffeeChainDetail = async (upc) => {
        try {
            const coffeeDetail = await contract.call('fetchItemBufferTwo',[upc]);
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

    const harvestCoffee = async (form) => {
      try {
          const result = await contract.call('harvestItem',[
            form.upc,
            form.originFarmerID,
            form.originFarmName,
            form.originFarmInformation,
            form.originFarmLatitude,
            form.originFarmLongitude,
            form.productNotes
          ]);
          console.log("contract call success",result)
          return result;
      } catch (error) {
          console.log("contract call failure",error) 
      }
    }

    const processCoffee = async (upc) => {
      try {
          const result = await contract.call('processItem',[upc]);
          console.log("contract call success",result)
          return result;
      } catch (error) {
          console.log("contract call failure",error) 
      }
    }

    const packCoffee = async (upc) => {
      try {
          const result = await contract.call('packItem',[upc]);
          console.log("contract call success",result)
          return result;
      } catch (error) {
          console.log("contract call failure",error) 
      }
    }

    const sellCoffee = async (form) => {
      try {
          const result = await contract.call('sellItem',[form.upc,form.price]);
          console.log("contract call success",result)
          return result;
      } catch (error) {
          console.log("contract call failure",error) 
      }
    }

    // Distributor Roles
    const addNewDistributor = async (id) => {
        try {
            const result = await contract.call('addDistributor',[id]);
            console.log("contract call success",result)
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    const getDistributorItems = async () => {
        try {
            const items = await contract.call('fetchForSaleItems', [], { from: address });
            console.log("contract call success", items);
            return items;
        } catch (error) {
            console.log("contract call failure",error)
            return [];
        }
    }

    const buyCoffee = async (upc, nativeTokenValue, setSuccessMessage) => {
        try {
          const result = await contract.call('buyItem', [upc], { value: ethers.utils.parseEther(nativeTokenValue) });
          console.log("contract call success", result);
          setSuccessMessage('Item purchased successfully!');
          return result;
        } catch (error) {
          console.log("contract call failure", error);
        }
    };

    const shipCoffee = async (upc, setSuccessMessage) => {
        try {
            const result = await contract.call('shipItem',[upc]);
            console.log("contract call success",result)
            setSuccessMessage('Item shipped successfully!');
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    // Retailer Roles
    const addNewRetailer = async (id) => {
        try {
            const result = await contract.call('addRetailer',[id]);
            console.log("contract call success",result)
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    const getRetailerItems = async() => {
        try {
            const items = await contract.call('fecthForShippedItemsList', [], { from: address });
            console.log("contract call success", items);
            return items;
        } catch (error) {
            console.log("contract call failure",error)
            return [];
        }
    }

    const receiveCoffee = async (upc, setSuccessMessage) => {
        try {
            const result = await contract.call('receiveItem',[upc]);
            console.log("contract call success",result)
            setSuccessMessage('Item received successfully!');
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    // Consumer Roles
    const addNewConsumer = async (id) => {
        try {
            const result = await contract.call('addConsumer',[id]);
            console.log("contract call success",result)
            return result;
        } catch (error) {
            console.log("contract call failure",error) 
        }
    }

    const getConsumerItems = async () => {
        try {
            const items = await contract.call('fetchAvailableForPurchaseItems', [], { from: address });
            console.log("contract call success", items);
            return items;
        } catch (error) {
            console.log("contract call failure",error)
            return [];
        }
    }

    const purchaseCoffee = async (upc, setSuccessMessage) => {
        try {
            const result = await contract.call('purchaseItem',[upc]);
            console.log("contract call success",result)
            setSuccessMessage('Item purchased successfully!');
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
            getCoffeeOriginDetail,
            getCoffeeChainDetail,
            addNewFarmer,
            harvestCoffee,
            processCoffee,
            packCoffee,
            sellCoffee,
            addNewDistributor,
            getDistributorItems,
            buyCoffee,
            shipCoffee,
            addNewRetailer,
            getRetailerItems,
            receiveCoffee,
            addNewConsumer,
            getConsumerItems,
            purchaseCoffee
          }}
        >
          {children}
        </StateContext.Provider>
      )
}

export const useStateContext = () => useContext(StateContext);