import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-us', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-us', { day: 'numeric' });
  return (
    <div className="expense-date">
      <div className="expense-month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
