import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");


  const yearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
   
  return (
    <Card className="expenses">
      <ExpenseFilter onChageYear={yearHandler} />
     <ExpensesList expense={filteredExpense} />
    </Card>
  );
}

export default Expenses;
