import React from "react";
import Loader from "react-loader-spinner";
import "./Loader.css";

class LoaderEle extends React.Component {
  state = {};
  render() {
    return (
      <div className="loader-container">
        <div className="loader-item">
          <Loader
            type="Watch"
            color="rgba(255, 255, 255, 0.5)"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </div>
      </div>
    );
  }
}

export default LoaderEle;
