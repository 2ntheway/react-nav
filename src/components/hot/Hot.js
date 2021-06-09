import React, { Component, Fragment } from "react";
import axios from "axios";
class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://42.193.52.117:8080/weibo")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
