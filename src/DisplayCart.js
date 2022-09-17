import React, { Component } from "react";
import { products as data } from "./data";
import { findSum } from "./helper.js";
import "./styles.css";

export class DisplayCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSum: 0,
      isClicked: false
    };
  }
  handleClick = () => {
    const total = findSum(data);
    this.setState({ totalSum: total, isClicked: !this.state.isClicked });
  };
  render() {
    return (
      <div id="demo1">
        <table border={1} id="tablestyles">
          <tr>
            <th>name of the item</th>
            <th>price of item</th>
            <th>quantity</th>
            <th>total</th>
            <th>discount percentage</th>
            <th>discount price</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.discountedPrice}</td>
              </tr>
            );
          })}
        </table>
        <button onClick={this.handleClick}>FindSum</button>
        {this.state.isClicked && this.state.totalSum}
      </div>
    );
  }
}

export default DisplayCart;
