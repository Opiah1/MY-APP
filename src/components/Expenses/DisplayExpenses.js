import React, {useState} from 'react';
import Card from "../UI/Card"
import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import "./DisplayExpenses.css";
const DisplayExpenses = (props) =>{
  const [MyDefaultYear, setEnteredYear] = useState("2020")
  const filterYearHandler = (enteredYear) =>{
    setEnteredYear(enteredYear)
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === MyDefaultYear
  });
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={MyDefaultYear}
          onSelectYear={filterYearHandler}
        />
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </li>
  );
}

export default DisplayExpenses;
