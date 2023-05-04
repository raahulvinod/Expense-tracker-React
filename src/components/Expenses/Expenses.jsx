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

  return (
    <div className="expenses">
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {lists.map((list) => {
            return (
              <ExpenseItem
                key={list.id}
                title={list.title}
                amount={list.amount}
                date={list.date}
              />
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Expenses;
