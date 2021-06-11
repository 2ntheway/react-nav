import React, { Component, Fragment } from "react";
import "./Content.css";
import store from "../../store/index";
import { connect } from "react-redux";
import Item from "../item/Item";
import Group from "../group/Group";
// 引入用于网站get数据
import axios from "axios";
import { Link } from "react-router-dom";
// 引入antd使用控件
import { Input, Select, Button, Modal } from "antd";
const { Option } = Select;
class Content extends Component {
  // componentDidMount() {
  //   axios
  //     .get("http://42.193.52.117:8080/data")
  //     .then((response) => {
  //       this.setprops({ data: response.data["data"] });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // showModal = () => {
  //   this.setprops({
  //     visible: true,
  //   });
  // };

  // hideModal = () => {
  //   this.setprops({
  //     visible: false,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <div className="bd">
          <Link to="/weibohot">微博热榜</Link>
          <div className="bd-input">
            <Button type="primary" onClick={this.showModal}>
              数据添加
            </Button>
            <Modal
              title="表单"
              visible={this.props.visible}
              onOk={this.handleBthClick}
              onCancel={this.hideModal}
              okText="提交"
              cancelText="关闭"
            >
              请选择
              <Select
                placeholder="Search to Select"
                value={this.props.inputValue.group}
                onChange={this.handleInputGroup}
              >
                <Option value="团队组织">团队组织</Option>
                <Option value="团伙作战">团伙作战</Option>
              </Select>
              {/* 错误提示信息 */}
              {this.props.group_errorMessage ? (
                <span>{this.props.group_errorMessage}</span>
              ) : null}
              图片:
              <Input
                type="text"
                value={this.props.inputValue.img}
                onChange={this.handleInputImg}
              />
              {/* 错误提示信息 */}
              {this.props.img_errorMessage ? (
                <span>{this.props.img_errorMessage}</span>
              ) : null}
              标题:
              <Input
                type="text"
                value={this.props.inputValue.title}
                onChange={this.handleInputTitle}
              />
              {/* 错误提示信息 */}
              {this.props.title_errorMessage ? (
                <span>{this.props.title_errorMessage}</span>
              ) : null}
              描述:
              <Input
                type="text"
                value={this.props.inputValue.desc}
                onChange={this.handleInputDesc}
              />
              {/* 错误提示信息 */}
              {this.props.desc_errorMessage ? (
                <span>{this.props.desc_errorMessage}</span>
              ) : null}
            </Modal>
          </div>
          <div className="bd-contex">
            {this.props.data.map(function (element, index) {
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
}
// mappropsToProps store里面的公用数据会映射到我的我的组件的Props的inputValue里面去
// props指的是store里面的数据 映射到组件的props里面 组件要使用store里面的inputValue 使用this.props.inputValue
const mapStateToProps = (state) => {
  return {
    data: state.data,
    inputValue: state.inputValue,
    visible: state.visible,
    group_errorMessage: state.group_errorMessage,
    title_errorMessage: state.title_errorMessage,
    desc_errorMessage: state.desc_errorMessage,
    img_errorMessage: state.img_errorMessage,
  };
};
// 我们把store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    // 获取添加的图片信息
    handleInputImg(e) {
      const action = {
        type: "input_img",
        value: e.target.value,
      };
      dispatch(action);
    },
    // 获取添加的title信息
    handleInputTitle(e) {
      const action = {
        type: "input_title",
        value: e.target.value,
      };
      dispatch(action);
    },
    // 获取添加的描述信息
    handleInputDesc(e) {
      const action = {
        type: "input_desc",
        value: e.target.value,
      };
      dispatch(action);
    },
    // 获取添加的分组信息
    handleInputGroup(e) {
      const action = {
        type: "input_group",
        value: e.target.value,
      };
      dispatch(action);
    },
    // 提交添加的数据
    handleBthClick() {
      const action = {
        type: "submit_data",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
