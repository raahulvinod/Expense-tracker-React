import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
          <ExpensesList filteredExpenses={filteredExpenses} />;
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
