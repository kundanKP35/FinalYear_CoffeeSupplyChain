import React, { useState } from 'react';
import {useStateContext} from '../context';
import HarvestItem from '../components/Farmer/HarvestItem';
import ProcessItem from '../components/Farmer/ProcessItem';
import PackItem from '../components/Farmer/PackItem';
import SellItem from '../components/Farmer/SellItem';

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
                <h3>Add Farmer</h3>
                <form onSubmit={handleAddFarmer} className="w-full mt-[65px] flex flex-col gap-[30px]">
                    <label htmlFor="newFarmerIdInput">Enter New Farmer ID:</label>
                    <input type="text" id="newFarmerIdInput" name="newFarmerIdInput" required value={newFarmerId} onChange={handleFormFieldChange} />
                    <button type="submit">Add Farmer</button>
                </form>
                {isLoading && <p>Loading...</p>}
                {addFarmerResult && <p>{addFarmerResult}</p>}
                {error && <p>Error: {error}</p>}
            </div>

            <div>
                <h3>Farmer roles..</h3>
                <div>
                    <HarvestItem />
                    <ProcessItem />
                    <PackItem />
                    <SellItem />
                </div>
            </div>
        </div>
    )
}

export default Farmer