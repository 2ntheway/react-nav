import React, { Component, Fragment } from 'react';
import './Content.css'
import Item from './Item';
import Group from './Group';
import axios from 'axios'
class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]     
    }         
  }
  componentDidMount(){
    axios.get('http://42.193.52.117:8080/data')
  .then((response) => {
    console.log(response.data['data']);
    this.setState({data: response.data['data']})
  })
  .catch((error)=>{
    console.log(error);
  });
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

export default Content;