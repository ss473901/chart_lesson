import React from "react";
import "./App.css";
import BarPlot from "./components/BarPlot";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
    </div>
  );
}

export default App;
