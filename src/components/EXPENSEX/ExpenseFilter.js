import React from "react";

function ExpenseFilter(props) {
    const yearHandler=(event)=>{
        // console.log(event.target.value); 
        props.onChageYear(event.target.value)
    }
  return (
    <div>
        
      <label htmlFor="yearSelect">Select a Year:</label>
      <select id="yearSelect" name="year"
      onChange={yearHandler}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
    
  );
}

export default ExpenseFilter;
