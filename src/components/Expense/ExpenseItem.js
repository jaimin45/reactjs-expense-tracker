import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title)

  // eslint-disable-next-line no-unused-vars
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2> </div>
      <div className='expense-item__price'>${props.amount}</div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem;
