import './Content.css'
import './Item'
import React, {Fragment } from 'react';
import onePic from "./img/1.jpg";
import twoPic from "./img/2.jpg";
import therePic from "./img/3.png";
import fourPic from "./img/4.png";
import fivePic from "./img/5.png";
import sixPic from "./img/6.png";
import sevenPic from "./img/7.ico";
import eightPic from "./img/8.png";
import Item from './Item';
function Content() {
    return (
      <Fragment>
        <h3>团队组织</h3>
        <ul className="App">
          {/* one */} 
            <Item img={onePic} title="腾讯 AlloyTeam 团队" desc="腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站"/>
          {/* two */}
            <Item img={twoPic} title="ISUX" desc="腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站"/>       
          {/* there */}
            <Item img={therePic} title="FEX" desc="百度Web前端研发部出品"/>       
          {/* four */}
            <Item img={fourPic} title="淘宝前端团队（FED）" desc="用技术为体验提供无限可能"/>  
          {/* five */}
            <Item img={fivePic} title="凹凸实验室" desc="京东用户体验设计部出品"/>                 
          {/* six */}
            <Item img={sixPic} title="奇舞团" desc="奇虎360旗下前端开发团队出品"/>        
          {/* seven */}
            <Item img={sevenPic} title="阿里巴巴国际UED团队" desc="在更新的屏幕里创造出更好的产品和更优的体验"/>   
          {/* eight */}
            <Item img={eightPic} title="EFE" desc="由百度多个遵循统一技术体系的前端团队所组成"/>   
    </ul>
    </Fragment>
    );
  }
  
  export default Content;