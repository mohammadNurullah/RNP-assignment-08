import React, { useState } from "react";

const IncomeForm = ({ onAddTransaction }) => {
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ type: "income", amount: parseFloat(income) });
    setIncome("");
  };

  return (
    <div>
      <h2>Enter Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
