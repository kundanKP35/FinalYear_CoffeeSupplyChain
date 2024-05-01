import React, { useState } from 'react';
import { useStateContext } from '../../context';

const SellItem = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { sellCoffee } = useStateContext();

    const [formValues, setFormValues] = useState({
        upc: '',
        price: '',
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
            await sellCoffee(formValues);
            setSuccessMessage('Coffee listed for sale successfully');
        } catch (error) {
            console.error('Error listing coffee for sale:', error);
            setErrorMessage('Error listing coffee for sale');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h4>Sell Item</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="upc">UPC:</label>
                <input type="text" id="upc" name="upc" value={formValues.upc} onChange={handleFormFieldChange} />

                <label htmlFor="price">Price (wei):</label>
                <input type="number" id="price" name="price" value={formValues.price} onChange={handleFormFieldChange} />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Selling...' : 'Sell Item'}
                </button>
            </form>
            {isLoading && <p>Loading...</p>}
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    )
}

export default SellItem