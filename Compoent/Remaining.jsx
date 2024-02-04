import React from 'react'
import { AppContext } from './Context/AppContext'
import {useContext} from 'react'

const Remaining = () => {
  const {expenses,budget} = useContext(AppContext)
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total += item.cost)
    }
    ,0);
    const  alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className="text-center text-uppercase">
    <div className={`alert ${alertType}`}>
    <span >Remaining :${budget -totalExpenses}</span>
    </div> 
 </div>
  )
}

export default Remaining
