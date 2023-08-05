import React from "react";

const ExpensesSection = ({ transactions }) => {
  const calculateTotalExpenses = () => {
    return transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  };

  return (
    <div className="expense">
      <p>Expenses: {Math.abs(calculateTotalExpenses())}</p>
    </div>
  );
};

export default ExpensesSection;
