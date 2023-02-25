import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Test from "./test";
import FetPost from "./component";
class App extends React.Component {
  render() {
    return (
      <div>
        <div>hii</div>
        <div>
          <FetPost />
        </div>
      </div>
    );
  }
}

export default App;
