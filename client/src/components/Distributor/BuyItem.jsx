import React, { useState } from 'react';
import { useStateContext } from '../../context';

const BuyItem = () => {
  const [upc, setUpc] = useState('');
  const [nativeTokenValue, setNativeTokenValue] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const { buyCoffee } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await buyCoffee(upc, nativeTokenValue, setSuccessMessage);

    setUpc('');
    setNativeTokenValue(0);
  };

  return (
    <div>
      <h2>Buy Item</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Upc:
          <input type="text" value={upc} onChange={(e) => setUpc(e.target.value)} />
        </label>
        <label>
          Native Token Value (Ether):
          <input type="number" value={nativeTokenValue} onChange={(e) => setNativeTokenValue(e.target.value)} />
        </label>
        <button type="submit">Buy Item</button>
      </form>
    </div>
  );
};

export default BuyItem;
