import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTransaction from "../components/ExpenseTransaction";

const ExpensePage = () => {
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const addExpenseTransaction = (transaction) => {
    setExpenseTransactions([...expenseTransactions, transaction]);
  };

  return (
    <div>
      <h1>Expense Page</h1>
      <ExpenseForm onAddTransaction={addExpenseTransaction} />
      <h2>Expense Transactions</h2>
      <ul>
        {expenseTransactions.map((transaction, index) => (
          <ExpenseTransaction key={index} amount={transaction.amount} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensePage;
