import React from 'react';

import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>May 2 2023</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">25000</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
