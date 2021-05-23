import React, { Component, Fragment } from 'react';
import './Content.css'
import Item from './Item';
import Group from './Group';
import axios from 'axios'
// import oneImg from './img/1.jpg'
// import twoImg from './img/2.jpg'
// import thereImg from './img/3.jpg'
// import fourImg from './img/4.jpg'
// import fiveImg from './img/5.jpg'
// import sixImg from './img/6.jpg'
// import sevenImg from './img/7.jpg'
// import eightImg from './img/8.jpg'
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
      // data:[
      //   {group:'团队组织',
      //       list:[
      //         {title:'腾讯 AlloyTeam 团队',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:oneImg},
      //         {title:'ISUX',desc:'腾讯社交用户体验设计，简称ISUX',img:twoImg},
      //         {title:'FEX',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:thereImg},
      //         {title:'淘宝前端团队（FED）',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:fourImg},
      //         {title:'凹凸实验室',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:fiveImg},
      //         {title:'奇舞团',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:sixImg},
      //         {title:'阿里巴巴国际UED团队',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:sevenImg},
      //         {title:'EFE',desc:'由百度多个遵循统一技术体系的前端团队所组成',img:eightImg},
      // ]},
      //   {group:'团伙作战',
      //       list:[
      //         {title:'腾讯 AlloyTeam 团队',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:oneImg},
      //         {title:'ISUX',desc:'腾讯社交用户体验设计，简称ISUX',img:twoImg},
      //         {title:'FEX',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:thereImg},
      //         {title:'淘宝前端团队（FED）',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:fourImg},
      //         {title:'凹凸实验室',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:fiveImg},
      //         {title:'奇舞团',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:sixImg},
      //         {title:'阿里巴巴国际UED团队',desc:'腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站',img:sevenImg},
      //         {title:'EFE',desc:'由百度多个遵循统一技术体系的前端团队所组成',img:eightImg},
      // ]}]
           
    }
    this.getDate = this.getDate.bind(this);
  }
  
  render() {
    return (
      <Fragment>
        <div>
          {
            this.state.data.map(function (element, index) {
              return (
                <Fragment>
                  <Group key={index} cont={element.group} />
                  <ul className="App">
                    {
                      element.list.map((items, id) => {
                        return (
                          <Item key={id} img={items.img} title={items.title} desc={items.desc} />)
                      })
                    }
                  </ul>
                </Fragment>
              )
            }
            )
          }
        </div>
      </Fragment>
    );
  }
}

function getDate() {
  axios.get('http://42.193.52.117:8080/data')
.then((response) => {
  console.log(response.data['data']);
  this.setState({data: response.data['data']})
})
.catch((error)=>{
  console.log(error);
});
}
getDate()
export default Content;