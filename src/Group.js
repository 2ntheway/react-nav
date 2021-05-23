import React, { Component, Fragment } from 'react';
class Group extends Component{
    constructor(props){
        super(props)
    }
    render() {
    return (
        <h3>{this.props.cont}</h3>
    )
}
}
export default Group;