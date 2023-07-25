import React, { useState } from 'react';

function ExpensePage() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle expense transaction submission here
    console.log('Expense submitted:', { amount, description });
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Expense Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount:
            <input type="number" value={amount} onChange={handleAmountChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpensePage;