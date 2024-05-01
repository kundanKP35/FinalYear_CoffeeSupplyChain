import React, { useState } from 'react';
import { useStateContext } from '../context';

const CoffeeDetails1 = () => {
  const [upc, setUpc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [coffeeDetails, setCoffeeDetails] = useState(null);

  const { getCoffeeDetail1 } = useStateContext();

  const handleFormFieldChange = (e) => {
    setUpc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getCoffeeDetail1(upc);
      setCoffeeDetails(result);
    } catch (error) {
      console.error('Error fetching coffee details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
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
            <p>Origin Farm Name: {coffeeDetails.originFarmName}</p>
            <p>Origin Farmer Id: {coffeeDetails.originFarmerID}</p>
            <p>Origin Farm Latitude: {coffeeDetails.originFarmLatitude}</p>
            <p>Origin Farm Longitude: {coffeeDetails.originFarmLongitude}</p>
            <p>Origin Farm Information: {coffeeDetails.originFarmInformation}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CoffeeDetails1;
