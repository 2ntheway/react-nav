import React, { Fragment } from "react";
import Side from "./components/side/Side";
import Content from "./components/content/Content";
import store from "./store/index";
import { Provider } from "react-redux";
// nav页面
export default function nav() {
  return (
    <Fragment>
      <Side />
      <Provider store={store}>
        <Content />
      </Provider>
    </Fragment>
  );
}
