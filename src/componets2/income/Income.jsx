import React from "react";

const IncomeSection = ({ transactions }) => {
  const calculateTotalIncome = () => {
    return transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  };

  return (
    <div className="income">
      <p>Income: ${calculateTotalIncome()}</p>
    </div>
  );
};

export default IncomeSection;
