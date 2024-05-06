import React, { useState } from 'react';
import { useStateContext } from '../../context';

const ShipItem = () => {
  const [upc, setUpc] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { shipCoffee } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await shipCoffee(upc, setSuccessMessage);

    setUpc('');
  };

  return (
    <div className='mt-4'>
        <h2>Ship Item</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Upc:
          <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
        </label>
        <button type="submit">Ship Item</button>
      </form>
    </div>
  );
};

export default ShipItem;
