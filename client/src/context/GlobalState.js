import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Coffee", amount: -4.5 },
    { id: 2, text: "Monitor", amount: -125 },
    { id: 3, text: "Paycheck", amount: 750 },
    { id: 4, text: "Charger", amount: -25 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
    console.log(transaction)
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
