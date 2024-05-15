import React, { useState } from "react";
import { useStateContext } from "../../context";
import { toast } from "react-toastify";

const HarvestItem = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { harvestCoffee } = useStateContext();

  const [formValues, setFormValues] = useState({
    originFarmerID: "",
    upc: "",
    originFarmName: "",
    originFarmInformation: "",
    originFarmLatitude: "",
    originFarmLongitude: "",
    productNotes: "",
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
      await harvestCoffee(formValues, setSuccessMessage);
      actionText();
      setSuccessMessage("Coffee details added successfully");
      toast("Coffee details added successfully", { type: "success" });

    } catch (error) {
      console.error("Error adding coffee details:", error);
      setErrorMessage("Error adding coffee details");
      toast("Error adding coffee details", { type: "error" });
    } finally {
      setIsLoading(false);
      closeModal();
    }
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-bold border-b-4 border-yellow-500 rounded-b">
          Harvest Item
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full mt-[20px] flex flex-col gap-[20px] form_modal"
        >
          <div>
            <label htmlFor="upcInput">UPC:</label>
            <input
              type="text"
              id="upcInput"
              name="upc"
              required
              value={formValues.upc}
              onChange={handleFormFieldChange}
            />
          </div>
          <div>
            <label htmlFor="originFarmerIDInput">Origin Farmer ID:</label>
            <input
              type="text"
              id="originFarmerIDInput"
              name="originFarmerID"
              required
              value={formValues.originFarmerID}
              onChange={handleFormFieldChange}
            />
          </div>

          <div>
            <label htmlFor="originFarmNameInput">Origin Farm Name:</label>
            <input
              type="text"
              id="originFarmNameInput"
              name="originFarmName"
              required
              value={formValues.originFarmName}
              onChange={handleFormFieldChange}
            />
          </div>

          <div>
            <label htmlFor="originFarmInformationInput">
              Origin Farm Information:
            </label>
            <input
              type="text"
              id="originFarmInformationInput"
              name="originFarmInformation"
              required
              value={formValues.originFarmInformation}
              onChange={handleFormFieldChange}
            />
          </div>

          <div>
            <label htmlFor="originFarmLatitudeInput">
              Origin Farm Latitude:
            </label>
            <input
              type="text"
              id="originFarmLatitudeInput"
              name="originFarmLatitude"
              required
              value={formValues.originFarmLatitude}
              onChange={handleFormFieldChange}
            />
          </div>

          <div>
            <label htmlFor="originFarmLongitudeInput">
              Origin Farm Longitude:
            </label>
            <input
              type="text"
              id="originFarmLongitudeInput"
              name="originFarmLongitude"
              required
              value={formValues.originFarmLongitude}
              onChange={handleFormFieldChange}
            />
          </div>

          <div>
            <label htmlFor="productNotesInput">Product Notes:</label>
            <textarea
              type="text"
              id="productNotesInput"
              name="productNotes"
              required
              value={formValues.productNotes}
              onChange={handleFormFieldChange}
              rows="5" cols="33"
            />
          </div>

          <div className="py-3 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            {isLoading ? 'Harvesting...' : 'Confirm'}
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
    </>
  );
};

export default HarvestItem;
