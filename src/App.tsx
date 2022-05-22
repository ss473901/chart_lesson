import React from "react";
import "./App.css";
import BarPlot from "./components/BarPlot";
import BubblePlot from "./components/BubblePlot";
import LinePlot from "./components/LinePlot";
import MaterialUI from "./components/MaterialUI";
import PiePlot from "./components/PiePlot";
import RadarPlot from "./components/RadarPlot";

function App() {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />*/}
      <MaterialUI />
    </div>
  );
}

export default App;
