import React,{Component,Fragment} from 'react'
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
            <ul>
                

            </ul>         
        )
    }
}

export default Side;