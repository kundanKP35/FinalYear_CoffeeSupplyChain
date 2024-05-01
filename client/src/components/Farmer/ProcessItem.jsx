import React, { useState } from 'react';
import { useStateContext } from '../../context';

const ProcessItem = () => {
    const [upc, setUpc] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { processCoffee } = useStateContext();

    const handleInputChange = (e) => {
        setUpc(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            await processCoffee(upc);
            setSuccessMessage(`Item with UPC ${upc} processed successfully`);
        } catch (error) {
            console.error('Error processing item:', error);
            setErrorMessage('Error processing item');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h4>Process Item Form</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="upc">UPC:</label>
                <input type="text" id="upc" name="upc" value={upc} onChange={handleInputChange} />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Process Item'}
                </button>
            </form>

            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
    )
}

export default ProcessItem