import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredTitle: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };
  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
  };

  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="Text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023=01-01"
            onChange={DateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
