import './App.css'
import React, {Fragment } from 'react';
import onePic from "./img/1.jpg";
import twoPic from "./img/2.jpg";
import therePic from "./img/3.png";
import fourPic from "./img/4.png";
import fivePic from "./img/5.png";
import sixPic from "./img/6.png";
import sevenPic from "./img/7.ico";
import eightPic from "./img/8.png";
function App() {
  return (
    <Fragment>
      <h3>团队组织</h3>
      <ul className="App">
        {/* one */}
        <li>
          <div className='log'>
          <img src={onePic}/>
          腾讯 AlloyTeam 团队
          </div>
          <div className='des'>
          腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究
          </div>
          <div>
          </div>
        </li>
        {/* two */}
        <li>
          <div className='log'>
          <img src={twoPic}/>
          ISUX
          </div>
          <div className='des'>
          腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站
          </div>
          <div>
          </div>
        </li>
        {/* there */}
        <li>
          <div className='log'>
          <img src={therePic}/>
          FEX
          </div>
          <div className='des'>
          百度Web前端研发部出品
          </div>
          <div>
          </div>
        </li>
        {/* four */}
        <li>
          <div className='log'>
          <img src={fourPic}/>
          淘宝前端团队（FED）
          </div>
          <div className='des'>
          用技术为体验提供无限可能
          </div>
          <div>
          </div>
        </li>
        {/* five */}
        <li>
          <div className='log'>
          <img src={fivePic}/>
          凹凸实验室
          </div>
          <div className='des'>
          京东用户体验设计部出品
          </div>
          <div>
          </div>
        </li>
        {/* six */}
        <li>
          <div className='log'>
          <img src={sixPic}/>
          奇舞团
          </div>
          <div className='des'>
          奇虎360旗下前端开发团队出品
          </div>
          <div>
          </div>
        </li>
        {/* seven */}
        <li>
          <div className='log'>
          <img src={sevenPic}/>
          阿里巴巴国际UED团队
          </div>
          <div className='des'>
          在更新的屏幕里创造出更好的产品和更优的体验
          </div>
          <div>
          </div>
        </li>
        {/* eight */}
        <li>
          <div className='log'>
          <img src={eightPic}/>
          EFE
          </div>
          <div className='des'>
          由百度多个遵循统一技术体系的前端团队所组成
          </div>
          <div>
          </div>
        </li>
  </ul>
  </Fragment>
  );
}

export default App;
