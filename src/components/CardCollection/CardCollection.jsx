import React from "react";
import Card from "../Card/Card";
import "./CardCollection.css";

class CardCollection extends React.Component {
  state = {
    data: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49
    ]
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
