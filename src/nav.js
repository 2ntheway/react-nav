import React, { Fragment } from "react";
import Side from "./components/side/Side";
import Content from "./components/content/Content";
// nav页面
export default function nav() {
  return (
    <Fragment>
      <Side />
      <Content />
    </Fragment>
  );
}
