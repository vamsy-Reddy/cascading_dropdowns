import React, { useState } from "react";
import "./styles.css";

const countriesData = [
  {
    name: "Germany",
    states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"]
  },
  {
    name: "India",
    states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"]
  },
  {
    name: "France",
    states: ["Auvergne", "Bretagne", "Corse", "Centre"]
  }
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryOnchange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  const handleStateOnchange = (e) => {
    setSelectedState(e.target.value);
  };

  const filteredStates = selectedCountry
    ? countriesData.find((item) => item.name === selectedCountry).states
    : [];

  return (
    <div className="App">
      <select
        style={{ width: 250 }}
        value={selectedCountry}
        onChange={handleCountryOnchange}
      >
        <option value="">--------------Select Country---------------</option>
        {countriesData.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;
      <select
        style={{ width: 250 }}
        value={selectedState}
        onChange={handleStateOnchange}
      >
        <option value="">--------------View Results----------------</option>
        {filteredStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}
