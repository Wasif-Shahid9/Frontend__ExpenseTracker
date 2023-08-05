import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  const handleAddTransaction = () => {
    if (name.trim() === "" || amount.trim() === "") {
      alert("Please fill out both fields before adding a transaction.");
      return;
    }
    const newTransaction = { name, amount };
    if (amount < 0) {
      setExpenses(expenses + Number(amount));
    } else {
      setIncome(income + Number(amount));
    }
    setTransactions([...transactions, newTransaction]);
    setName("");
    setAmount("");
  };

  const calculateTotalBalance = () => {
    return transactions.reduce(
      (total, transaction) => total + parseFloat(transaction.amount),
      0
    );
  };
  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction, index) => index !== id
    );
    setTransactions(updatedTransactions);
  };
  return (
    <>
      <div className="form">
        <h1>Expense Tracker</h1>
        <div className="balance">
          {/* <h1>Balance $ {calculateTotalBalance()}  </h1> */}
          <h1>Balance $ {income + expenses} </h1>
        </div>
        <div className="income">Amount: ${calculateTotalBalance()}</div>
        <div className="expense">
          <p>Expenses:{Math.abs(expenses)}</p>
          <p>Income: {income}</p>
        </div>
        <div className="history">
          {transactions.map((transaction, index) => (
            <div key={index}>
              <p>
                Name::
                {transaction.name}
              </p>
              <p>
                Amount: $
                {transaction.amount < 0
                  ? Math.abs(transaction.amount)
                  : Math.abs(transaction.amount)}
              </p>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Income"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <br />
          <button className="" onClick={handleAddTransaction}>
            Add Transaction
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
