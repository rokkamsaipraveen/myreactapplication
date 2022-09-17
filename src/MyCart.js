import React, {Component} from "react";
import DisplayCart from "./DisplayCart";
import FilterData from "./FilterData";
import "./styles.css"

export class MyCart extends Component {
  constructor(props){
    super(props);
    this.state={
      displayCart:false,
      displayFilter:false,
    };
  }
  handleClick=e=>{
    if(e.target.id==='show'){
      this.setState({displayCart:true, displayFilter:false})
    }
    else if(e.target.id==='filter'){
      this.setState({displayFilter:true, displayCart:false})  
    }
  }
  render(){
    return <div>
      <h1>My shopping cart</h1>
      <div className="box">
        <button className="myButton" id='show' onClick={this.handleClick}>show cart</button>
        <button className="myButton" id='filter' onClick={this.handleClick}>Filter cart</button>
        <div className='container'>
          {this.state.displayCart && <DisplayCart/>}
          {this.state.displayFilter && <FilterData/>}
        </div>
      </div>
    </div>;
  }
}
export default MyCart;