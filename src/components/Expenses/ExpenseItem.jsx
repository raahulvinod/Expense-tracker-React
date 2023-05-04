import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  const [titleText, setTilteText] = useState(title);

  const handleClick = () => {
    setTilteText('Updated');
    console.log(titleText);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleText}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={handleClick} type="button">
          Change Title
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
