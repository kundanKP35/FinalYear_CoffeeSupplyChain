import React, { useState } from 'react';
import { useStateContext } from '../context';
import { ethers } from 'ethers';

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <label htmlFor="upcInput">Enter UPC:</label>
        <input type="text" id="upcInput" name="upcInput" required value={upc} onChange={handleFormFieldChange} />
        <button type="submit">Submit</button>
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
