import React, { Component, Fragment } from 'react';
class Item extends Component{
    constructor(props){
        super(props)
    }
    render() {
    return (
      <li>
          <div className='log'>
              <img src={this.props.img} />
              {this.props.title}            
          </div>
          <div className="desc">{this.props.desc}</div>
      </li>
    )
}
}
export default Item;