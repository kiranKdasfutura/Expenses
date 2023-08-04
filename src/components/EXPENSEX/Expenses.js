import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [excludYears, setExcludYears] = useState("");
  // console.log(props);
  const yearHandler = (selectedYear) => {
    setExcludYears(selectedYear);
    console.log(
      "actual year",
      selectedYear,
      "year recived on State",
      excludYears
    );

    if (excludYears == "2020") {
      setExcludYears("2021,2022,2023");
    } else if (excludYears == "2021") {
      setExcludYears("2020,2022,2023");
    } else if (excludYears == "2022") {
      setExcludYears("2020,2021,2023");
    } else {
      setExcludYears("2020,2021,2022");
    }
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onChageYear={yearHandler} />
      <p style={{ color: "white" }}>excludYears are : {excludYears} </p>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
