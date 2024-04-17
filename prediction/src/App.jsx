// App.js
import React, { useState } from "react";
import { Chart } from "chart.js/auto";

const App = () => {
  const [monthOne, setMonthOne] = useState("");
  const [monthTwo, setMonthTwo] = useState("");
  const [monthThree, setMonthThree] = useState("");
  const [weatherOne, setWeatherOne] = useState("");
  const [weatherTwo, setWeatherTwo] = useState("");
  const [weatherThree, setWeatherThree] = useState("");
  const [politicsOne, setPoliticsOne] = useState("");
  const [politicsTwo, setPoliticsTwo] = useState("");
  const [politicsThree, setPoliticsThree] = useState("");
  const [predictions, setPredictions] = useState([]); // Define predictions state variable

  React.useEffect(() => {
    const ctx = document.getElementById("predictionChart").getContext("2d");

    const labels = [
      "Month 1",
      "Month 2",
      "Month 3",
      "Month 4",
      "Month 5",
      "Month 6",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Predictions",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          data: predictions,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const predictionChart = new Chart(ctx, config);

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      predictionChart.destroy();
    };
  }, [predictions]);

  const calculatePrediction = (
    incomeOne,
    incomeTwo,
    incomeThree,
    weatherOne,
    weatherTwo,
    weatherThree,
    politicsOne,
    politicsTwo,
    politicsThree
  ) => {
    // Calculate the total income by summing up the incomes of all three months
    const totalIncome =
      parseFloat(incomeOne) + parseFloat(incomeTwo) + parseFloat(incomeThree);

    // Calculate the total weather condition by summing up the values of all three months
    const totalWeather =
      calculateValue(weatherOne) +
      calculateValue(weatherTwo) +
      calculateValue(weatherThree);

    // Calculate the total political situation by summing up the values of all three months
    const totalPolitics =
      calculateValue(politicsOne) +
      calculateValue(politicsTwo) +
      calculateValue(politicsThree);

    // Perform prediction calculation based on total income, total weather condition, and total political situation
    // Example calculation: Multiply total income by total weather factor and total politics factor
    const weatherFactor = totalWeather / 3; // Taking the average of weather conditions
    const politicsFactor = totalPolitics / 3; // Taking the average of political situations
    const prediction = totalIncome * weatherFactor * politicsFactor;
    return prediction;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate predictions for the upcoming six months
    const predictionsArray = [];
    for (let i = 0; i < 6; i++) {
      // Calculate predictions based on the values of all three months
      const prediction = calculatePrediction(
        monthOne,
        monthTwo,
        monthThree,
        i === 0 ? weatherOne : i === 1 ? weatherTwo : weatherThree,
        i === 0 ? politicsOne : i === 1 ? politicsTwo : politicsThree
      );
      predictionsArray.push(prediction);
    }
    setPredictions(predictionsArray);
  };

  const calculateValue = (selectedOption) => {
    switch (selectedOption) {
      case "summer":
        return 1.05;
      case "winter":
        return 1.0; // Default value or adjust as needed
      case "spring":
        return 1.0; // Default value or adjust as needed
      case "autumn":
        return 1.0; // Default value or adjust as needed
      case "rainy":
        return 0.25;
      case "stable":
        return 1.0; // Default value or adjust as needed
      case "unstable":
        return 0.95; // Example negative value
      case "inflation":
        return 0.9; // Example negative value
      case "other":
        return 1.0; // Default value or adjust as needed
      default:
        return 1.0; // Default value or adjust as needed
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Calculate predictions for the upcoming six months
  //   const predictionsArray = [];
  //   for (let i = 0; i < 6; i++) {
  //     // Dynamically select the state values based on the loop index
  //     const month = i === 0 ? monthOne : i === 1 ? monthTwo : monthThree;
  //     const weather =
  //       i === 0 ? weatherOne : i === 1 ? weatherTwo : weatherThree;
  //     const politics =
  //       i === 0 ? politicsOne : i === 1 ? politicsTwo : politicsThree;

  //     // Calculate prediction based on the values of the selected month
  //     const prediction = calculatePrediction(month, weather, politics);
  //     predictionsArray.push(prediction);
  //   }
  //   setPredictions(predictionsArray);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Calculate predictions for the upcoming six months
  //   const predictionsArray = [];
  //   for (let i = 0; i < 6; i++) {
  //     // Calculate predictions based on the values of all three months
  //     const prediction = calculatePrediction(
  //       i === 0 ? monthOne : i === 1 ? monthTwo : monthThree,
  //       i === 0 ? weatherOne : i === 1 ? weatherTwo : weatherThree,
  //       i === 0 ? politicsOne : i === 1 ? politicsTwo : politicsThree
  //     );
  //     predictionsArray.push(prediction);
  //   }
  //   setPredictions(predictionsArray);
  // };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-tl from-custom1 via-custom1 to-pink-950">
      {/* <div className="text-center text-5xl mb-8">Prediction</div> */}
      <div>
        <div className="flex overflow-hidden relative flex-col items-center self-stretch px-5 py-20 leading-[150%] min-h-[800px]">
          <div className="relative mt-6 text-7xl font-medium tracking-tighter text-center text-white bg-clip-text leading-[80px] w-[960px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Modern analytics
            <br />
            for the modern world
          </div>
          <img
            loading="lazy"
            srcSet="/main.png"
            className="mt-20 max-w-full rounded-3xl shadow aspect-[2.04] w-[960px] max-md:mt-10"
          />
        </div>
      </div>
      <div className="text-white text-center text-6xl  font-bold bg-clip-text text-transparent bg-gradient-to-bl from-black to-pink-700">
        Calculation
      </div>
      <div className="max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label className="block mb-2">Last Month Income</label>
            <input
              type="text"
              required
              placeholder="Last month income"
              value={monthOne}
              onChange={(e) => setMonthOne(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            />
            <select
              value={weatherOne}
              onChange={(e) => setWeatherOne(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select weather condition</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="autumn">Autumn</option>
              <option value="rainy">Rainy</option>
            </select>
            <select
              value={politicsOne}
              onChange={(e) => setPoliticsOne(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select political condition</option>
              <option value="stable">Stable</option>
              <option value="unstable">Unstable</option>
              <option value="inflation">Inflation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">2nd Last Month Income</label>
            <input
              type="text"
              required
              placeholder="Second last month income"
              value={monthTwo}
              onChange={(e) => setMonthTwo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            />
            <select
              value={weatherTwo}
              onChange={(e) => setWeatherTwo(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select weather condition</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="autumn">Autumn</option>
              <option value="rainy">Rainy</option>
            </select>
            <select
              value={politicsTwo}
              onChange={(e) => setPoliticsTwo(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select political condition</option>
              <option value="stable">Stable</option>
              <option value="unstable">Unstable</option>
              <option value="inflation">Inflation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">3rd Last Month Income</label>
            <input
              type="text"
              required
              placeholder="Third last month income"
              value={monthThree}
              onChange={(e) => setMonthThree(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            />
            <select
              value={weatherThree}
              onChange={(e) => setWeatherThree(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select weather condition</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="autumn">Autumn</option>
              <option value="rainy">Rainy</option>
            </select>
            <select
              value={politicsThree}
              onChange={(e) => setPoliticsThree(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-pink-500"
            >
              <option value="">Select political condition</option>
              <option value="stable">Stable</option>
              <option value="unstable">Unstable</option>
              <option value="inflation">Inflation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full text-xl bg-gradient-to-l from-pink-950 via-pink-600 to-pink-950 font-semibold text-white py-2 rounded-md hover:bg-black "
            onClick={handleSubmit}
          >
            Predict
          </button>
        </form>
        <div className="mt-8">
          <table className="w-full border-collapse border border-white">
            <thead>
              <tr>
                <th className="border text-white border-white">Month</th>
                <th className="border text-white border-white">Prediction</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((prediction, index) => (
                <tr key={index}>
                  <td className="border text-white border-white">{`Month ${
                    index + 1
                  }`}</td>
                  <td className="border text-white border-white">
                    {prediction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add a canvas element for the chart */}
      <canvas id="predictionChart" width="400" height="200"></canvas>
    </div>
  );
};

export default App;
