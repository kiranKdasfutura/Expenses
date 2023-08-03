import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  // console.log(props);
  return (
    <Card className="expenses">

      {
        props.items.map((item)=>{
          return(
            <div>
              <ExpenseItem
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              />
            </div>
          )
        })
      }
    </Card>
  );
}

export default Expenses;