import React from "react";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
    </div>
  );
}

export default App;
