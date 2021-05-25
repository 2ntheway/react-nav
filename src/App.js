import Content from "./components/content/Content";
import Side from "./components/Side/Side";
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
