import React, { useState } from "react";
import IncomeForm from "../components/IncomeForm";
import IncomeTransaction from "../components/IncomeTransaction";

const IncomePage = () => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);

  const addIncomeTransaction = (transaction) => {
    setIncomeTransactions([...incomeTransactions, transaction]);
  };

  return (
    <div>
      <h1>Income Page</h1>
      <IncomeForm onAddTransaction={addIncomeTransaction} />
      <h2>Income Transactions</h2>
      <ul>
        {incomeTransactions.map((transaction, index) => (
          <IncomeTransaction key={index} amount={transaction.amount} />
        ))}
      </ul>
    </div>
  );
};

export default IncomePage;
