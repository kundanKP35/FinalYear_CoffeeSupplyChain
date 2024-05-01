import React, { useState } from 'react';
import { useStateContext } from '../../context';

const PackItem = () => {
    const [upc, setUpc] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { packCoffee } = useStateContext();

    const handleInputChange = (e) => {
        setUpc(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await packCoffee(upc);
            setSuccessMessage(`Item with UPC ${upc} packed successfully`);
        } catch (error) {
            console.error('Error packing item:', error);
            setErrorMessage('Error packing item');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h4 className='text-sm text-red-500'>Pack Item Form</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="upc">UPC:</label>
                <input type="text" id="upc" name="upc" value={upc} onChange={handleInputChange} />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Packing...' : 'Pack Item'}
                </button>
            </form>

            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    )
}

export default PackItem