import React from "react";
import {Col,CardPanel} from "react-materialize"


export default class Card extends React.Component{
  render(){
    return(
      <Col s={6} m={3}>
        <CardPanel className = "left-align" style = {this.props.style} >
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
        </CardPanel>
      </Col>
    );
  }
}
