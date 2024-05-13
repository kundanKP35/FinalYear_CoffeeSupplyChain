import React, { useState } from "react";
import { useStateContext } from "../../context";

const SellItem = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { sellCoffee } = useStateContext();

  const [formValues, setFormValues] = useState({
    upc: "",
    price: "",
  });

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await sellCoffee(formValues, setSuccessMessage);
    } catch (error) {
      console.error("Error listing coffee for sale:", error);
      setErrorMessage("Error listing coffee for sale");
    } finally {
      closeModal();
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold border-b-4 border-yellow-500 rounded-b">
        Sell Item
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[20px] flex flex-col gap-[20px] form_modal"
      >
        <label htmlFor="upc">UPC:</label>
        <input
          type="text"
          id="upc"
          name="upc"
          value={formValues.upc}
          onChange={handleFormFieldChange}
        />

        <label htmlFor="price">Price (wei):</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formValues.price}
          onChange={handleFormFieldChange}
        />

        <div className="py-3 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {isLoading ? "Packing..." : "Confirm"}
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
      {isLoading && <p>Loading...</p>}
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default SellItem;
