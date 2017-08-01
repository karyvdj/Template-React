import React from "react";
import {Col,CardPanel} from "react-materialize"


export default class CardColor extends React.Component{
  render(){
    return(
      <Col s={6} m={3}>
        <CardPanel className = "left-align height-size white-text">
          <div className = {this.props.color}>
            <p>{this.props.text}</p>
            <h4>{this.props.title}</h4>
          </div>
          <div  className = "height-half"></div>
        </CardPanel>
      </Col>
    );
  }
}
