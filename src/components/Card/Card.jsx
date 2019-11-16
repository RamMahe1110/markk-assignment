import React from "react";
import "./Card.css";

class Card extends React.Component {
  state = {};
  render() {
    console.log(this.props.id);
    return (
      <div className="card">
        <img
          className="back-img"
          src={`https://picsum.photos/id/${this.props.id}/200/300`}
        />
        {this.props.id % 2 === 0 ? (
          <img
            className="reaction"
            src={require("../../assets/img/dope.png")}
          />
        ) : (
          <img
            className="reaction"
            src={require("../../assets/img/nope.png")}
          />
        )}
        <h1>
          <img src={require("../../assets/img/cam.png")} />
          <span>3</span>
        </h1>
      </div>
    );
  }
}

export default Card;
