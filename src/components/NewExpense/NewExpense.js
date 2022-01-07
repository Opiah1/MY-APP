import React, {useState}  from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
    const [isShowing, setIsShowing]= useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
       };
       props.onAddExpense(expenseData);
       setIsShowing(false);
    };
    const showForm = () =>{
        setIsShowing(true)
    }
    const hideform = () =>{
        setIsShowing(false)
    }
    return (
    <div className="new-expense">
        {!isShowing && <button onClick={showForm}>Add Expense</button>}
        {isShowing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel ={hideform}/>}
    </div>
    );
};
export default NewExpense;