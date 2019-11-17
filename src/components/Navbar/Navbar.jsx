import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={require("../../assets/img/markk.png")} alt="Markk" />
      </div>
    );
  }
}

export default Navbar;
