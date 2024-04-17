// EarningsPrediction.js
import React from "react";

const EarningsPrediction = ({ prediction }) => {
  return (
    <div>
      <h2>Earnings Prediction</h2>
      <p>Next month's earnings prediction: {prediction.nextMonth}</p>
      <p>
        Earnings prediction for the month after next:{" "}
        {prediction.monthAfterNext}
      </p>
      <p>
        Earnings prediction for the upcoming 3rd month: {prediction.thirdMonth}
      </p>
    </div>
  );
};

export default EarningsPrediction;
