import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
const Expenses= (props) => {

  const [filteredYear,setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return(
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item ={filteredExpenses} />
    </Card>
  )
}
export default Expenses;