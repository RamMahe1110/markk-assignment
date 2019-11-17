import React from "react";
import rangeInclusive from "range-inclusive";
import Card from "../Card/Card";
import "./CardCollection.css";

class CardCollection extends React.Component {
  state = {
    data: rangeInclusive(50)
  };

  render() {
    return (
      <div className="card-collection">
        {this.state.data.map((item, i) => (
          <Card key={i} id={i + 500} />
        ))}
      </div>
    );
  }
}

export default CardCollection;
