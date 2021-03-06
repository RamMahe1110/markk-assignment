import React from "react";
import "./Card.css";

class Card extends React.Component {
  truncate = (str, no_words) => {
    return str
      .split(" ")
      .splice(0, no_words)
      .join(" ");
  };

  render() {
    return (
      <div className="card">
        <img
          className="back-img"
          src={`https://picsum.photos/id/${this.props.id}/200/300`}
          alt="place"
        />
        {this.props.id % 2 === 0 ? (
          <img
            className="reaction"
            src={require("../../assets/img/dope.png")}
            alt="dope"
          />
        ) : (
          <img
            className="reaction"
            src={require("../../assets/img/nope.png")}
            alt="nope"
          />
        )}
        <div className="location">{this.truncate(this.props.title, 3)}</div>
        <div className="avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjnvVnGfSpJ7IRrr75PT0rYYdEEB4wb-Wyc5Li-iv4rGaAHRUH"
            alt="avatar"
          />
        </div>
        <h1>
          <img src={require("../../assets/img/cam.png")} alt="cam" />
          <span>3</span>
        </h1>
        <div className="feedback">
          <div className="heart">
            <img src={require("../../assets/img/heart.png")} alt="heart" />
            <span>2</span>
          </div>
          <div className="cmnt">
            <img src={require("../../assets/img/cmnt.png")} alt="comment" />
            <span>2</span>
          </div>
          <div className="share">
            <img src={require("../../assets/img/share.png")} alt="share" />
            <span>3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
