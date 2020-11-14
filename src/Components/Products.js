import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      Price: "Rs 1,200,000",
      Detail: "REEFER CKNTAINER VAN (SUZUKI)",
    };
  }
  render() {
    return (
      <div style={({ maxWidth: "15rem" },{display:"flex"})}>
        <Card style={({ width: "15rem" },{ padding: "10px" })}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200"
            height="200px"
          />
          <Card.Body style={{ borderLeft: "5px solid orange" }}>
            <Card.Title>
              <h5>{this.state.Price}</h5>
            </Card.Title>
            <Card.Text>
              <p>{this.state.Detail}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={({ width: "15rem" },{ padding: "10px" })}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200"
            height="200px"
          />
          <Card.Body style={{ borderLeft: "5px solid orange" }}>
            <Card.Title>
              <h5>{this.state.Price}</h5>
            </Card.Title>
            <Card.Text>
              <p>{this.state.Detail}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={({ width: "15rem" },{ padding: "10px" })}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200"
            height="200px"
          />
          <Card.Body style={{ borderLeft: "5px solid orange" }}>
            <Card.Title>
              <h5>{this.state.Price}</h5>
            </Card.Title>
            <Card.Text>
              <p>{this.state.Detail}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={({ width: "15rem" },{ padding: "10px" })}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200"
            height="200px"
          />
          <Card.Body style={{ borderLeft: "5px solid orange" }}>
            <Card.Title>
              <h5>{this.state.Price}</h5>
            </Card.Title>
            <Card.Text>
              <p>{this.state.Detail}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    
      // Card-2
    
    )
  }
}
