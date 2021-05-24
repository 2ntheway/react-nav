import Content from "./Content";
import Side from "./Side";
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
