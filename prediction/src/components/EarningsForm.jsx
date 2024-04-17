// EarningsForm.js
import React, { useState } from "react";

const EarningsForm = ({ onSubmit }) => {
  const [earnings, setEarnings] = useState({});

  const handleChange = (e) => {
    setEarnings({ ...earnings, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(earnings);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="month3"
        placeholder="Earnings for 3rd last month"
        onChange={handleChange}
      />
      <input
        type="number"
        name="month2"
        placeholder="Earnings for 2nd last month"
        onChange={handleChange}
      />
      <input
        type="number"
        name="month1"
        placeholder="Earnings for last month"
        onChange={handleChange}
      />
      <button type="submit">Predict</button>
    </form>
  );
};

export default EarningsForm;
