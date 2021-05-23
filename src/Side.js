import React,{Component,Fragment} from 'react'
import './Side.css'
class Side extends Component{
    constructor(props){
        super(props)
        this.state={
            type:
            ['团队组织',
            '开发社区',
            '前端门户',
            '框架类库',
            '开发平台',
            '图形动效',
            '游戏框架',
            'CSS相关',
            '前端大会',
            'Node.js相关',
            'IDE',
            '调试工具',
            '构建工具',
            '在线工具',
            '字体图标',
            '设计资源',
            '前端公众号',
            '前端大牛']
        }
    }
    render(){
        return (
            <Fragment>
            <div>
            <h3>Web前端导航</h3>
            <h4>前端导航</h4>
            <ul>
                {this.state.type.map((element, index) => {
                    return <li key={index}>{this.state.type[index]}</li>                    
                })}
                {/* <li>{this.state.type[0]}</li>
                <li>{this.state.type[1]}</li> */}
                {/* <li>{this.state.Side.type[0]}</li> */}
                {/* {this.state.type.map((element, index) => {
                    <li>{this.state.Side.type[0]}</li>                    
                })}   */}
            </ul>   
            <h4>留言</h4>
            </div>
            </Fragment>  
        )
    }
}

export default Side;