import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from './Context/AppContext'
import { v4 as uuidv4 } from 'uuid';
 
  
const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <div className="card w-25 w-md-50 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center align-items-center" >Add Expense</h5>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(event) => {
                setCost(event.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary px-4 m-3">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm
