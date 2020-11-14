import React, { Component } from "react";
import Categories from "./Categories";
import NavBar from "./NavBar";
import Image from 'react-bootstrap/Image'
import img from "../Images/chrome-capture.jpg"
import Afterimg from "./../Images/after.jpg"
import add from "../Images/add.jpg"

export default class Head extends Component {
    handleClick = (e)=>{
            // setTimeout(()=>{
            //     e.src = Afterimg
            // },500)
            console.log(e)
    }
  render() {
    return (
      <div>
        <NavBar />
        <Categories />
        <Image src={img} onChange={(e)=> this.handleClick(e)} fluid />
        <br />
        <hr />
        <Image src={add} fluid />
      </div>
    );
  }
}
