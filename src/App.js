import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CardCollection from "./components/CardCollection/CardCollection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardCollection />
    </div>
  );
}

export default App;
