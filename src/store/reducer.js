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
  switch (action.type) {
    case "init_data":
      const newState = JSON.parse(JSON.stringify(state));
      newState.data = action.value;
      return newState;
  }
  // 显示控件
  switch (action.type) {
    case "show":
      const newState = JSON.parse(JSON.stringify(state));
      newState.visible = action.value;
      return newState;
  }
  // 关闭控件;
  switch (action.type) {
    case "close":
      const newState = JSON.parse(JSON.stringify(state));
      newState.visible = action.value;
      return newState;
  }
  // 添加图片信息;
  switch (action.type) {
    case "input_img":
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue.img = action.value;
      return newState;
  }
  // 添加title信息;
  switch (action.type) {
    case "input_title":
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue.title = action.value;
      return newState;
  }
  // 添加描述信息;
  switch (action.type) {
    case "input_desc":
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue.desc = action.value;
      return newState;
  }
  // 添加分组信息;
  switch (action.type) {
    case "input_group":
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue.group = action.value;
      return newState;
  }
  // 提交添加的数据;
  switch (action.type) {
    case "submit_data":
      const newState = JSON.parse(JSON.stringify(state));
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
  }
  return defaultState;
};

// handleBthClick() {
//   // 提示用户输入，这个地方设置为生效？待解决
//   this.setState({
//     group_errorMessage: "",
//     title_errorMessage: "",
//     desc_errorMessage: "",
//     img_errorMessage: "",
//   });

//   if (this.state.inputValue.img === "") {
//     this.setState({
//       // errorMessage: "输入不能为空",
//       img_errorMessage: "图片必选项",
//     });
//   }
//   if (this.state.inputValue.title === "") {
//     this.setState({
//       // errorMessage: "输入不能为空",
//       title_errorMessage: "标题必选项",
//     });
//   }
//   if (this.state.inputValue.desc === "") {
//     this.setState({
//       // errorMessage: "输入不能为空",
//       desc_errorMessage: "描述必选项",
//     });
//   }
//   if (this.state.inputValue.group === "") {
//     this.setState({
//       // errorMessage: "输入不能为空",
//       group_errorMessage: "分组必选项",
//     });
//   }
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
