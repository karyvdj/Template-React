import React from "react";
import ItemLarge from "./ItemLarge.jsx";
import {Col,CardPanel,Row} from "react-materialize";


export default class CardLarge extends React.Component{
  render(){
    return(
      <Col s={12} m={9}>
        <CardPanel  style = {this.props.style}>
          <div className = "height-size-l"></div>
          <div className='grey darken-3 white-text'>
            <Row>
              <ItemLarge titleLarge = "15080" textLarge = "Shot Views"/>
              <ItemLarge titleLarge = "12000" textLarge = "Likes"/>
              <ItemLarge titleLarge = "5100" textLarge = "Comments"/>
            </Row>
          </div>
        </CardPanel>
      </Col>
    );
  }
}
