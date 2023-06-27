import './Item.css'
import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props);
        console.log(props.data)
    }
    componentDidMount(){
        console.log("item component did mount "+ this.props.data.name)
    }
    componentWillUnmount(){
        console.log("itetm Will unmount component "+this.props.data.name)
    }

    render(){
      return(
        <div className='item' >
            <h3>{this.props.data.name}</h3>
            <p>{this.props.data.description}</p>
        </div>
      );
    } 
  }
  
export default Item;



