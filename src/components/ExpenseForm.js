import React, { useState } from "react";

const ExpenseForm = ({ onAddTransaction }) => {
  const [expense, setExpense] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ type: "expense", amount: parseFloat(expense) });
    setExpense("");
  };

  return (
    <div>
      <h2>Enter Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
