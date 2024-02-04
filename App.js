import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Bugdet from './Compoent/Bugdet';
import Remaining from './Compoent/Remaining';
import ExpenseTotal from './Compoent/ExpenseTotal';
import AddExpenseForm from './Compoent/AddExpenseForm';
 import {AppProvider} from './Compoent/Context/AppContext';
import ExpenseList from './Compoent/ExpenseList';
 
const App =()=> {
  return (
    <AppProvider>
    <div className="Container">
    <h1 className='mt-3  text-center p-3 m-4'> My Budget Planner</h1>
    <div className="row m-4">
    <div className="col-sm ">
         <Bugdet/>
    </div>
    <div className="col-sm">
        <Remaining/>
    </div>
    <div className="col-sm">
      <ExpenseTotal/>
    </div>
    </div>
    <h3 className='m-4 text-uppercase'>
      Expenses :
    </h3>
    <div className="row m-4 p-3">
      <div className="col-sm">
        <ExpenseList/>
      </div>
      
    </div>
    <h3 className='m-1 text-uppercase text-center'>
       Add Expense
    </h3>
    <div className=" p-3">
      <div className="col-sm w-100 d-flex justify-content-center align-items-center">
        <AddExpenseForm/> 
      </div>
    </div>
    </div>
    
    </AppProvider>
  );
}

export default App;
