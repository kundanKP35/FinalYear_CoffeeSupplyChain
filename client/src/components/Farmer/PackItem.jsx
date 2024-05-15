import React, { useState } from "react";
import { useStateContext } from "../../context";
import { toast } from "react-toastify";


const PackItem = ({ closeModal }) => {
  const [upc, setUpc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { packCoffee } = useStateContext();

  const handleInputChange = (e) => {
    setUpc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await packCoffee(upc);
      setSuccessMessage(`Item with UPC ${upc} packed successfully`);
      toast(`Item with UPC ${upc} packed successfully`, { type: "success" });
    } catch (error) {
      console.error("Error packing item:", error);
      setErrorMessage("Error packing item");
      toast("Error packing item", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold border-b-4 border-yellow-500 rounded-b">
        Pack Item Form
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
          value={upc}
          onChange={handleInputChange}
        />

        <div className="py-3 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {isLoading ? 'Packing...' : 'Confirm'}
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

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default PackItem;
