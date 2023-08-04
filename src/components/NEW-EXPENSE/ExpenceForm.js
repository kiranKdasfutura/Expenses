import React, { useState } from "react";
import "./ExpenceForm.css";
function ExpenceForm(props) {
//   const [expenseHandler, setExpenseHandler] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

//   const titleChangeHandler = (event) => {
//     setExpenseHandler((loadState) => {
//       return { ...loadState, title: event.target.value };
//     });
//   };
//   const amountChageHandler = (event) => {
//     setExpenseHandler((loadState) => {
//       return {
//         ...loadState,
//         amount: event.target.value,
//       };
//     });
//   };
//   const dateChageHandler = (event) => {
//     setExpenseHandler((loadState) => {
//       return {
//         ...loadState,
//         date: event.target.value,
//       };
//     });
//   };

const [titleHandler, setTitleHandler] = useState('')
const [amountHandler, setAmountHandler] = useState('')
const [dateHandler, setDateHandler] = useState('')

const commonChangeHandler=(functionName,value)=>{
    if(functionName==='title'){
        setTitleHandler(value)
    }else if(functionName==='amount'){
        setAmountHandler(value)
    }else if(functionName==='date'){
        setDateHandler(value)
    }

}
const submitHandler=(event)=>{
  event.preventDefault();
  const expenseData={
    title:titleHandler,
    amount:amountHandler,
    date:new Date(dateHandler) ,
  }
 props.onExpenseData(expenseData)
  // console.log(expenseData)
}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
           onChange={(event)=>{commonChangeHandler("title", event.target.value)}}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={"0.01"}
            step={"0.01"}
            onChange={(event)=>{commonChangeHandler("amount", event.target.value)}}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min={"2020-01-01"}
            max={"2023-12-31"}
            onChange={(event)=>{commonChangeHandler("date", event.target.value)}}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
}

export default ExpenceForm;
