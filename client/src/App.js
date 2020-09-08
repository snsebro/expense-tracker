import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
