import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm  = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")
    // const [userInput, setUserInput]= useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // });
        //if state update depends on previous function use this
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    };
    const submitFormHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }; 
        
        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (<form onSubmit={submitFormHandler}>
        <div className= "new-expense__controls">
                   <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value ={enteredTitle}onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value ={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value = {enteredDate} min="2019-01-1" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
<<<<<<< HEAD
                    <div></div>
=======
>>>>>>> 9b5da9bd830b680ac1afda38e03bd4b568965bff
        </div>
        <div className="new-expense__actions">
        <button type = "button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
        </form>
    )
};
export default ExpenseForm;