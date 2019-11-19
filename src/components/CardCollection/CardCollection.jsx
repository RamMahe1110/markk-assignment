import React from "react";
import rangeInclusive from "range-inclusive";
import axios from "axios";
import Card from "../Card/Card";

import "./CardCollection.css";
import LoaderEle from "./../Loader/Loader";

class CardCollection extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
      this.setState({ data: res.data });
    });
  }

  componentWillUnmount() {
    this.setState({ data: null });
  }

  render() {
    if (this.state.data === null) {
      return <LoaderEle />;
    }

    return (
      <div className="card-collection">
        {this.state.data.map((item, i) => (
          <Card key={i} id={i + 500} title={item.title} />
        ))}
      </div>
    );
  }
}

export default CardCollection;
