import {React,useContext} from 'react'
import { AppContext } from './Context/AppContext'


const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total,item)=>{
    return (total += item.cost)
  },0);
  return (
    <div className="text-center text-uppercase">
       <div className="alert alert-primary">
       <span>Spent so far :${totalExpenses}</span>
       </div> 
    </div>
  )
}

export default ExpenseTotal
