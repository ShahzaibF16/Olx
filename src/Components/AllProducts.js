import React, { Component } from "react";
import Products from "./Products";

export default class AllProducts extends Component {
  render() {
    return (
      <div style={{display: "inline-block"},{width:"15rem"},{justifyContent:"space-around"}}>
        <Products />
        <Products/>
      </div>
    );
  }
}
