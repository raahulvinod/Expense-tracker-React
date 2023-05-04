import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import Card from '../UI/Card';

const Expenses = ({ lists }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = lists.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {lists.length === 0 ? (
            <p>No Expenses found.</p>
          ) : (
            filteredExpenses.map((expenses) => {
              return (
                <ExpenseItem
                  key={expenses.id}
                  title={expenses.title}
                  amount={expenses.amount}
                  date={expenses.date}
                />
              );
            })
          )}
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
