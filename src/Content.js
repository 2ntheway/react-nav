import React, { Component, Fragment } from "react";
import "./Content.css";
import Item from "./Item";
import Group from "./Group";
import axios from "axios";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: {
        group: "",
        title: "",
        desc: "",
        img: "",
      },
    };
    this.handleInputImg = this.handleInputImg.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputDesc = this.handleInputDesc.bind(this);
    this.handleInputGroup = this.handleInputGroup.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://42.193.52.117:8080/data")
      .then((response) => {
        console.log(response.data["data"]);
        this.setState({ data: response.data["data"] });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <div>
          <div>
            选择分类
            <select
              value={this.state.inputValue.group}
              onChange={this.handleInputGroup}
            >
              <option>团队组织</option>
              <option>团伙作战</option>
            </select>
            图片:
            <input
              type="text"
              value={this.state.inputValue.img}
              onChange={this.handleInputImg}
            />
            标题:
            <input
              type="text"
              value={this.state.inputValue.title}
              onChange={this.handleInputTitle}
            />
            描述:
            <input
              type="text"
              value={this.state.inputValue.desc}
              onChange={this.handleInputDesc}
            />
            <input type="button" value="提交" />
          </div>
          <div>
            {this.state.data.map(function (element, index) {
              return (
                <Fragment>
                  <Group key={index} cont={element.group} />
                  <ul className="App">
                    {element.list.map((items, id) => {
                      return (
                        <Item
                          key={id}
                          img={items.img}
                          title={items.title}
                          desc={items.desc}
                        />
                      );
                    })}
                  </ul>
                </Fragment>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
  handleInputImg(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ img: e.target.value } },
    });
  }
  handleInputTitle(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ title: e.target.value } },
    });
  }
  handleInputDesc(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ desc: e.target.value } },
    });
  }
  handleInputGroup(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ group: e.target.value } },
    });
  }
}

export default Content;
