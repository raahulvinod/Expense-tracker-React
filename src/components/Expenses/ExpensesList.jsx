import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expense-list__fallback ">Found no expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {filteredExpenses.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
