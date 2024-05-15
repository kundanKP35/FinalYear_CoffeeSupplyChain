import React, { useState } from 'react';
import { useStateContext } from '../context';
import { ethers } from 'ethers';
import { toast } from "react-toastify";


const CoffeeChainDetails = () => {
  const [upc, setUpc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeDetails, setCoffeeDetails] = useState(null);

  const { getCoffeeChainDetail } = useStateContext();

  const handleFormFieldChange = (e) => {
    setUpc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getCoffeeChainDetail(upc);
      setCoffeeDetails(result);
    } catch (error) {
      console.error('Error fetching coffee details:', error);
      toast('Error fetching coffee details', { type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='text-white w-5/12 rounded-md border border-gray-300 shadow-sm px-4 py-2'>
      <h1 className="text-3xl font-bold mb-4">
          Fetch Coffee Supply Chain Details
        </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[15px] form_modal">
        <label htmlFor="upcInput">Enter UPC:</label>
        <input type="text" id="upcInput" name="upcInput" required value={upc} onChange={handleFormFieldChange} />
        <button type="submit" className='w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm dark:bg-gray-900'>Submit</button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        coffeeDetails && (
          <div>
            <h2>Coffee Details</h2>
            <p>Item's SKU: {coffeeDetails.itemSKU.toString()}</p>
            <p>Item's UPC: {coffeeDetails.itemUPC.toString()}</p>
            {/* <p>Product Id: {coffeeDetails.productID.toString()}</p> */}
            <p>Product Notes: {coffeeDetails.productNotes}</p>
            <p>Product Price: {parseFloat(ethers.utils.formatEther(coffeeDetails.productPrice)).toFixed(5)} ETH</p>
            {/* <p>Item's State: {coffeeDetails.itemState.toString()}</p> */}
            <p>Distributor's ID: {coffeeDetails.distributorID}</p>
            <p>Retailer's ID: {coffeeDetails.retailerID}</p>
            <p>Consumer's ID: {coffeeDetails.consumerID}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CoffeeChainDetails;
