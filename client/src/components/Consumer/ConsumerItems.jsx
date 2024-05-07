import React, { useState } from "react";
import { useStateContext } from "../../context";

const ConsumerItems = ({ closeModal }) => {
  const { getConsumerItems } = useStateContext();
  const [upcs, setUpcs] = useState([]);
  const [fetched, setFetched] = useState(false);

  const handleFetchItems = async () => {
    try {
      const items = await getConsumerItems();
      setFetched(true);
      if (items && items.length > 0) {
        const upcList = items.map((item) => item.toString());
        setUpcs(upcList);
      } else {
        console.log("No items available for purchase.");
      }
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  return (

    <div className="w-full">
      <h1 className="text-3xl font-bold border-b-4 border-yellow-500 rounded-b">
        Fetch available Coffee for sale
      </h1>
      {upcs.length > 0 ? (
        <div>
          <h3>UPCs:</h3>
          <ul>
            {upcs.map((upc, index) => (
              <li key={index}>{upc}</li>
            ))}
          </ul>
        </div>
      ) : fetched ? (
        <p>No items available from Retailor for sale.</p>
      ) : (
        <></>
      )}
      <form className="w-full mt-[20px] flex flex-col gap-[20px] form_modal">
        {/* <button onClick={handleFetchItems} className='px-4 py-2 border-[1px]'>
                Fetch Items
            </button> */}
        <div className="py-3 sm:flex sm:flex-row-reverse">
          {!fetched && (
            <button
              type="button"
              onClick={handleFetchItems}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Fetch Items
            </button>
          )}
          <button
            type="button"
            onClick={closeModal}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsumerItems;
