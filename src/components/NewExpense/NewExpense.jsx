import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ addExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
