import React,{useState} from 'react';
import { useStateContext } from '../context';

const Farmer = () => {
    const [newFarmerId, setNewFarmerId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [addFarmerResult, setAddFarmerResult] = useState(null);
    const [error, setError] = useState(null);

    const { addNewFarmer } = useStateContext();

    const handleFormFieldChange = (e) => {
        setNewFarmerId(e.target.value);
    };

    const handleAddFarmer = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const result = await addNewFarmer(newFarmerId);
            setAddFarmerResult('Farmer added successfully');
        } catch (error) {
            console.error('Error adding farmer:', error);
            setError('Error adding farmer');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div>
                <h1>Add Farmer</h1>
                <form onSubmit={handleAddFarmer} className="w-full mt-[65px] flex flex-col gap-[30px]">
                    <label htmlFor="newFarmerIdInput">Enter New Farmer ID:</label>
                    <input type="text" id="newFarmerIdInput" name="newFarmerIdInput" required value={newFarmerId} onChange={handleFormFieldChange} />
                    <button type="submit">Add Farmer</button>
                </form>
                {isLoading && <p>Loading...</p>}
                {addFarmerResult && <p>{addFarmerResult}</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    )
}

export default Farmer