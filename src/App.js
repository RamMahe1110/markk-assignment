import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CardCollection from "./components/CardCollection/CardCollection";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardCollection />
      <Footer />
    </div>
  );
}

export default App;
