import React from "react";
import axios from "axios";
import Card from "../Card/Card";

import "./CardCollection.css";
import LoaderEle from "./../Loader/Loader";

class CardCollection extends React.Component {
  state = {
    data: null,
    corruptImg: {
      540: 669,
      592: 741,
      561: 757,
      589: 726,
      595: 796,
      597: 798,
      578: 777,
      587: 723
    }
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
    const { corruptImg } = this.state;

    if (this.state.data === null) {
      return <LoaderEle />;
    }

    return (
      <div className="card-collection">
        {this.state.data.map((item, i) => (
          <Card
            key={i}
            id={corruptImg[i + 500] ? corruptImg[i + 500] : i + 500}
            title={item.title}
          />
        ))}
      </div>
    );
  }
}

export default CardCollection;
