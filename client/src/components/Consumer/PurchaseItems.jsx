import React, { useState } from 'react';
import { useStateContext } from '../../context';

const PurchaseItem = () => {
  const [upc, setUpc] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { purchaseCoffee } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await purchaseCoffee(upc, setSuccessMessage);

    setUpc('');
  };

  return (
    <div className='mt-4'>
        <h2>Purchase Item</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Upc:
          <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
        </label>
        <button type="submit">Purchase Item</button>
      </form>
    </div>
  );
};

export default PurchaseItem;
