import React from "react";

import "./App.css";
import { Header } from "./components/Header/Header";

import { IncomeExpenses } from "./components/IncomeExpenses/IncomeExpenses";
import { TransactionList } from "./components/TransactionList/TransactionList";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";

import {GlobalProvider} from './context/GlobalState'
import { Balance } from "./components/Balance/Balance";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
