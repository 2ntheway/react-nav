const defaultState = {
  data: [],
  inputValue: {
    group: "",
    title: "",
    desc: "",
    img: "",
  },
  visible: false,
  // 用于提示用户提示信息
  group_errorMessage: "",
  title_errorMessage: "",
  desc_errorMessage: "",
  img_errorMessage: "",
};
export default (state = defaultState, action) => {
  // 初始化sate数据
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "init_data":
      newState.data = action.value;
      return newState;
    // 显示控件
    case "show":
      newState.visible = action.value;
      return newState;
    // 关闭控件;
    case "close":
      newState.visible = action.value;
      return newState;
    // 添加图片信息;
    case "input_img":
      newState.inputValue.img = action.value;
      return newState;
    // 添加title信息;
    case "input_title":
      newState.inputValue.title = action.value;
      return newState;
    // 添加描述信息;
    case "input_desc":
      newState.inputValue.desc = action.value;
      return newState;
    // 添加分组信息;
    case "input_group":
      newState.inputValue.group = action.value;
      return newState;
    // 提交添加的数据;
    case "submit_data":
      newState.group_errorMessage = "";
      newState.title_errorMessage = "";
      newState.desc_errorMessage = "";
      newState.img_errorMessage = "";
      if (newState.inputValue.img === "") {
        newState.img_errorMessage = "图片地址不能为空";
      }
      if (newState.inputValue.title === "") {
        newState.title_errorMessage = "标题不能为空";
      }
      if (newState.inputValue.desc === "") {
        newState.desc_errorMessage = "描述不能为空";
      }
      if (newState.inputValue.group === "") {
        newState.group_errorMessage = "分组不能为空";
      }
      if (
        newState.inputValue.group &&
        newState.inputValue.title &&
        newState.inputValue.desc &&
        newState.inputValue.img
      ) {
      }
      return newState;
  }
  return defaultState;
};

//   // 数据输入完整后修改state的data数据
//   if (
//     this.state.inputValue.group &&
//     this.state.inputValue.title &&
//     this.state.inputValue.desc &&
//     this.state.inputValue.img
//   ) {
//     this.state.data.map((item, index) => {
//       if (item.group == this.state.inputValue.group) {
//         // 构建对象
//         const tmp = {
//           title: this.state.inputValue.title,
//           desc: this.state.inputValue.desc,
//           img: this.state.inputValue.img,
//         };
//         // 拷贝state里面的数据
//         const units = [...this.state.data];
//         // 拷贝需要修改数据的部分并添加数据
//         const unit = [...units[index].list, tmp];
//         // 把修改后的数据放回去
//         units[index].list = unit;
//         // 更新state里面的数据
//         this.setState({ units });
//         this.state.visible = false;
//       }
//     });
//   }
// }
