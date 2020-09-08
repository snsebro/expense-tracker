import React, {useState} from "react";

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h3>Add new transaction</h3>
      <div className="form">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text"
          placeholder="Enter text..." />
      </div>
      <div className="form">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount"
          placeholder="Enter amount..." />
      </div>
    </div>
  );
};
