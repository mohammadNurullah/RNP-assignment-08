import React from "react";

const ExpenseTransaction = ({ amount }) => {
  return <li>Amount: ${amount.toFixed(2)}</li>;
};

export default ExpenseTransaction;
