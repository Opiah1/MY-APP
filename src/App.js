import React ,{ useState }from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e5",
    title: "Cutlery",
    amount: 340,
    date: new Date(2019, 2, 4),
  },
  {
    id: "e6",
    title: "Plates",
    amount: 301,
    date: new Date(2020, 8, 14),
  },
];
  // return React.createElement(
    // 'div',
    // {},
    // React.createElement('h1',{},"Let's get started"),
    // React.createElement(DisplayExpenses, { items : expenses}),
    // )
    const App = () => {
         const [expenses, setExpenses] = useState(dummy_expenses);
         const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
         return  [expense, ...prevExpenses];
         });
      };

      return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <DisplayExpenses items={expenses} />
        </div>
      );
    };

  



export default App;
