import React, { useState } from 'react';
import { useStateContext } from '../../context';

const HarvestItem = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { harvestCoffee } = useStateContext();

    const [formValues, setFormValues] = useState({
        upc: '',
        originFarmerID: '',
        originFarmName: '',
        originFarmInformation: '',
        originFarmLatitude: '',
        originFarmLongitude: '',
        productNotes: '',
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
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await harvestCoffee(formValues);
            setSuccessMessage('Coffee details added successfully');
        } catch (error) {
            console.error('Error adding coffee details:', error);
            setErrorMessage('Error adding coffee details');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h4>Harvest Item</h4>
            <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
                <label htmlFor="upcInput">UPC:</label>
                <input type="text" id="upcInput" name="upc" required value={formValues.upc} onChange={handleFormFieldChange} />

                <label htmlFor="originFarmerIDInput">Origin Farmer ID:</label>
                <input type="text" id="originFarmerIDInput" name="originFarmerID" required value={formValues.originFarmerID} onChange={handleFormFieldChange} />

                <label htmlFor="originFarmNameInput">Origin Farm Name:</label>
                <input type="text" id="originFarmNameInput" name="originFarmName" required value={formValues.originFarmName} onChange={handleFormFieldChange} />

                <label htmlFor="originFarmInformationInput">Origin Farm Information:</label>
                <input type="text" id="originFarmInformationInput" name="originFarmInformation" required value={formValues.originFarmInformation} onChange={handleFormFieldChange} />

                <label htmlFor="originFarmLatitudeInput">Origin Farm Latitude:</label>
                <input type="text" id="originFarmLatitudeInput" name="originFarmLatitude" required value={formValues.originFarmLatitude} onChange={handleFormFieldChange} />

                <label htmlFor="originFarmLongitudeInput">Origin Farm Longitude:</label>
                <input type="text" id="originFarmLongitudeInput" name="originFarmLongitude" required value={formValues.originFarmLongitude} onChange={handleFormFieldChange} />

                <label htmlFor="productNotesInput">Product Notes:</label>
                <input type="text" id="productNotesInput" name="productNotes" required value={formValues.productNotes} onChange={handleFormFieldChange} />

                <button type="submit">Add Coffee</button>
            </form>
            {isLoading && <p>Loading...</p>}
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    )
}

export default HarvestItem