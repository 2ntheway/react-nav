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
    this.handleBthClick = this.handleBthClick.bind(this);
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
        <div className="bd">
          <div className="bd-input">
            选择分类
            <select
              value={this.state.inputValue.group}
              onChange={this.handleInputGroup}
            >
              <option value="">请选择</option>
              <option value="团队组织">团队组织</option>
              <option value="团伙作战">团伙作战</option>
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
            <button onClick={this.handleBthClick}>提交</button>
          </div>
          <div className="bd-contex">
            {this.state.data.map(function (element, index) {
              return (
                <Fragment>
                  <Group key={index} cont={element.group} />
                  <ul className="App">
                    {element.list.map((items, id) => {
                      return (
                        // 给组件传值
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
  // 获取添加的图片信息
  handleInputImg(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ img: e.target.value } },
    });
  }
  // 获取添加的title信息
  handleInputTitle(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ title: e.target.value } },
    });
  }
  // 获取添加的描述信息
  handleInputDesc(e) {
    this.setState({
      // 更新需要修改的属性
      inputValue: { ...this.state.inputValue, ...{ desc: e.target.value } },
    });
  }
  // 获取添加的分组信息
  handleInputGroup(e) {
    this.setState({
      inputValue: { ...this.state.inputValue, ...{ group: e.target.value } },
    });
  }
  // 提交添加的数据
  handleBthClick() {
    this.state.data.map((item, index) => {
      if (item.group == this.state.inputValue.group) {
        // 构建对象
        const tmp = {
          title: this.state.inputValue.title,
          desc: this.state.inputValue.desc,
          img: this.state.inputValue.img,
        };
        // 拷贝state里面的数据
        const items = [...this.state.data];
        // 拷贝需要修改数据的部分并添加数据
        const item = [...items[index].list, tmp];
        // 把修改后的数据放回去
        items[index].list = item;
        // 更新state里面的数据
        this.setState({ items });
      }
    });
  }
}

export default Content;
