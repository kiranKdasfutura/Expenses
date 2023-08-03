import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";
function ExpenseItem(props) {
  const [expense, setExpense] = useState(props);
  const [title, setTitle] = useState(expense.title)
  console.log(title);
  console.log(expense);
  const check = (id) => {
    setTitle('updated')
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">${expense.amount}</div>
        <button
          onClick={() => {
            check(expense.id);
          }}
        >
          change this
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
