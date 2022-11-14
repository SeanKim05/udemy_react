import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";
function ExpenseItem(props) {
  const propsData = props.data;

  return (
    <ul className="expenses">
      <h2>Let's get Started</h2>
      {propsData.map((prop) => (
        <li className="expense-item" key={prop.id}>
          <div>
            <ExpenseDate date={prop.date} />
          </div>
          <div className="expense-item__description">
            <h2>{prop.title}</h2>
            <ExpensePrice price={prop.amount} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseItem;
