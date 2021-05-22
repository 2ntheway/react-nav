import React, { Component,Fragment} from 'react';
import './Content.css'
import Item from './Item';
class Content extends Component {
  constructor(props){
    super(props)
    this.state={
      title:['腾讯 AlloyTeam 团队','ISUX','FEX','淘宝前端团队（FED）','凹凸实验室','奇舞团','阿里巴巴国际UED团队','EFE'],
      desc:['腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站','腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站','百度Web前端研发部出品','用技术为体验提供无限可能','京东用户体验设计部出品','奇虎360旗下前端开发团队出品','在更新的屏幕里创造出更好的产品和更优的体验','由百度多个遵循统一技术体系的前端团队所组成'],
      pic:'import onePic from "./img/2.jpg";'
    }
    }
    render() {
      return (      
        <Fragment>
          <h3>团队组织</h3>
          <ul className="App">
            {/* one */}
            {
              this.state.title.map((element, index) => {
                return <Item img={require(`./img/${index+1}.jpg`)} title={this.state.title[index]} desc={this.state.desc[index]}/>
              })             
            }
      </ul>
      </Fragment>
    );
}
}

  export default Content;