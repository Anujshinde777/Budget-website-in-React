import  { createContext, useReducer } from 'react';
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload

        ),
      };
    default:
      return state;
  
  }
};
    
const initialState = {
  budget: 4000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
  
  ],
};
 export const AppContext =createContext();
  export const AppProvider = (props) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

return (
<AppContext.Provider
value={
  
   { expenses: state.expenses,
    budget: state.budget,
    dispatch,
    }
  
}
>
{props.children}
</AppContext.Provider>

)
};
