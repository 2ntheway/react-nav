import Content from "./components/content/Content";
import Side from "./components/side/Side";
import Hot from "./components/hot/Hot";
import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Side />
        <Content />
      </Fragment>
    );
  }
}
export default App;
