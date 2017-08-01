import React from "react";
import {Col} from "react-materialize"


export default class CardLarge extends React.Component{
  render(){
    return(
      <Col m={4}>
        <h5>{this.props.titleLarge}</h5>
        <p>{this.props.textLarge}</p>
      </Col>
    );
  }
}
