import React from "react";
import "./NewExpense.css";
import ExpenceForm from "./ExpenceForm";
function NewExpense(props) {
 const onExpenseDataHandler=(currentExpense)=>{
  const  expenseData={
    ...currentExpense,
    id:Math.random().toString()
  }
  // console.log('newExpense',expenseData);
props.onExpenseDataTwo(expenseData)
 }
  return (
    <div className="new-expense">
      <ExpenceForm onExpenseData={onExpenseDataHandler} />
    </div>
  );  
}

export default NewExpense;
