import React, { useState } from 'react';
import { useStateContext } from '../../context';

const PurchaseItem = ({ closeModal }) => {
  const [upc, setUpc] = useState('');
  const [nativeTokenValue, setNativeTokenValue] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { buyCoffee } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await buyCoffee(upc, nativeTokenValue, setSuccessMessage);
    } catch (error) {
      setErrorMessage('Error buying item');
    } finally {
      closeModal();
    }

    setUpc('');
    setNativeTokenValue(0);
  };

  return (
      <div className="w-full">
      <h1 className="text-3xl font-bold border-b-4 border-yellow-500 rounded-b">
        Buy Item
      </h1>
      {successMessage && <p>{successMessage}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[20px] flex flex-col gap-[20px] form_modal"
      >
        <label>
          Upc:
          <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
        </label>
        <label>
          Native Token Value (Ether):
          <input type="number" value={nativeTokenValue} onChange={(e) => setNativeTokenValue(e.target.value)} />
        </label>

        <div className="py-3 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
          
            Confirm
          </button>
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

export default PurchaseItem;
