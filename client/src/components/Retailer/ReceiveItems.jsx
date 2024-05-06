import React, { useState } from 'react';
import { useStateContext } from '../../context';

const ShipItem = () => {
  const [upc, setUpc] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { receiveCoffee } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await receiveCoffee(upc, setSuccessMessage);

    setUpc('');
  };

  return (
    <div className='mt-4'>
        <h2>Receive Item</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Upc:
          <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
        </label>
        <button type="submit">Receive Item</button>
      </form>
    </div>
  );
};

export default ShipItem;
