import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
function ExpensesList(props) {
    if(props.expense.length===0){
      return <h2 className='expenses-list__fallback'>Found no expense.</h2>
    } 
  return (
<ul className='expenses-list'>
{
    props.expense.map((item)=>(
        <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
      ))
}

</ul>
  )
}

export default ExpensesList