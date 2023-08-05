import React, { useState } from "react";
import "./Form.css";
import IncomeSection from "./IncomeSection";
import ExpensesSection from "./ExpensesSection";

const Form = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    if (name.trim() === "" || amount.trim() === "") {
      alert("Please fill out both fields before adding a transaction.");
      return;
    }
    const newTransaction = { name, amount: parseFloat(amount) };
    setTransactions([...transactions, newTransaction]);
    setName("");
    setAmount("");
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
          <h1>
            Balance: ${transactions.reduce((total, t) => total + t.amount, 0)}
          </h1>
        </div>
        <IncomeSection transactions={transactions} />
        <ExpensesSection transactions={transactions} />
        <div className="history">
          {transactions.map((transaction, index) => (
            <div key={index}>
              <p>Name: {transaction.name}</p>
              <p>Amount: ${Math.abs(transaction.amount)}</p>
              <button className="delete" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <br />
          <input
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
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
