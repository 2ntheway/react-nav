import React, { Component, Fragment } from "react";
import data from "../../newList.json";

class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    return (
      <table>
        <thead>
          <tr class="thead_tr">
            <th class="th-01">序号</th>
            <th class="th-02">关键词</th>
            <th class="th-03">点击量</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => {
            return (
              <tr class="info">
                <td class="td-01">{index + 1}</td>
                <td class="td-02">
                  <a href={item.url}>{item.title}</a>
                </td>
                <td class="td-03">
                  <span>{item.views}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Hot;
