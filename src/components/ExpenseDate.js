import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (prop) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {prop.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {prop.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className="expense-date__day">{prop.date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
