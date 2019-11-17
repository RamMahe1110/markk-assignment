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
        <div className="avatar">
          <img src="https://i.pravatar.cc/50" />
        </div>
        <h1>
          <img src={require("../../assets/img/cam.png")} />
          <span>3</span>
        </h1>
        <div className="feedback">
          <div className="heart">
            <img src={require("../../assets/img/heart.png")} />
            <span>2</span>
          </div>
          <div className="cmnt">
            <img src={require("../../assets/img/cmnt.png")} />
            <span>2</span>
          </div>
          <div className="share">
            <img src={require("../../assets/img/share.png")} />
            <span>3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
