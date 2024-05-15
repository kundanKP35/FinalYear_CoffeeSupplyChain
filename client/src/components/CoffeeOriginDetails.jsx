import React, { useState } from 'react';
import { useStateContext } from '../context';
import { toast } from "react-toastify";


const CoffeeOriginDetails = () => {
  const [upc, setUpc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeDetails, setCoffeeDetails] = useState(null);

  const { getCoffeeOriginDetail } = useStateContext();

  const handleFormFieldChange = (e) => {
    setUpc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getCoffeeOriginDetail(upc);
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
          Fetch Coffee Origin Details
        </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[15px] form_modal">
        <label htmlFor="upcInput">Enter UPC:</label>
        <input type="text" id="upcInput" name="upcInput" required value={upc} onChange={handleFormFieldChange} />
        <button type="submit" className=' w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm dark:bg-gray-900'>Submit</button>
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        coffeeDetails && (
          <div>
            <h2>Coffee Details</h2>
            <p>Item's SKU: {coffeeDetails.itemSKU.toString()}</p>
            <p>Item's UPC: {coffeeDetails.itemUPC.toString()}</p>
            <p>Owner's Id: {coffeeDetails.ownerID}</p>
            <p>Origin Farmer Id: {coffeeDetails.originFarmerID}</p>
            <p>Origin Farm Name: {coffeeDetails.originFarmName}</p>
            <p>Origin Farm Latitude: {coffeeDetails.originFarmLatitude}</p>
            <p>Origin Farm Longitude: {coffeeDetails.originFarmLongitude}</p>
            <p>Origin Farm Information: {coffeeDetails.originFarmInformation}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CoffeeOriginDetails;
