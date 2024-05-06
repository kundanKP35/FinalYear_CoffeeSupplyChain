import React, { useState } from 'react';
import { useStateContext } from '../../context';

const DistributorItems = () => {
    const { getDistributorItems } = useStateContext();
    const [upcs, setUpcs] = useState([]);

    const handleFetchItems = async () => {
        try {
            const items = await getDistributorItems();
            if (items && items.length > 0) {
                const upcList = items.map(item => item.toString());
                setUpcs(upcList);
            } else {
                console.log('No items available for purchase.');
            }
        } catch (error) {
            console.log('Error fetching items:', error);
        }
    };

    return (
        <div>
            <h2>Distributor Items</h2>
            <button onClick={handleFetchItems} className='px-4 py-2 border-[1px]'>
                Fetch Items
            </button>
            {upcs.length > 0 && (
                <div>
                    <h3>UPCs:</h3>
                    <ul>
                        {upcs.map((upc, index) => (
                            <li key={index}>{upc}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DistributorItems;
