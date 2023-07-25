import React from "react";

const IncomeTransaction = ({ amount }) => {
  return <li>Amount: ${amount.toFixed(2)}</li>;
};

export default IncomeTransaction;
