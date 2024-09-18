import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 24.9) category = 'Normal weight';
      else if (bmiValue < 29.9) category = 'Overweight';
      else category = 'Obesity';

      setCategory(category);
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="toggle-container">
        <span style={{ color: darkMode ? '#f5f5f5' : '#000' }}>☀️</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span style={{ color: darkMode ? '#f5f5f5' : '#000' }}>🌙</span>
      </div>
      <div className="card">
        <h1 className="animate-title">BMI Calculator</h1>
        <div className="input-container">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="input-field"
            title="Enter your weight in kilograms"
          />
        </div>
        <div className="input-container">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="input-field"
            title="Enter your height in centimeters"
          />
        </div>
        <button className="button" onClick={calculateBMI}>Calculate BMI</button>
        <button className="button reset" onClick={resetCalculator} style={{ marginTop: '10px' }}>Reset</button>
        {bmi && (
          <div className={`result animate-result ${category.toLowerCase().replace(' ', '-')}`}>
            <h2>Your BMI is: {bmi}</h2>
            <h3>Category: {category}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
