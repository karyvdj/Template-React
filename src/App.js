import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card.jsx";
import CardColor from "./components/CardColor.jsx";
import CardLarge from "./components/CardLarge.jsx";
import {Row} from "react-materialize"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Card title = "20" text = "New followers added this month"/>
          <Card title = "$1250" text = "Averange Monthly income"/>
          <Card title = "$13865" text = "Yearly Income Goal"/>
          <Card style = {{background: "orange", color: "white", textAlign:"center"}} title = "18°" text = "Paris"/>
        </Row>
        <Row>
          <CardLarge style = {{background: "purple", padding: "0"}}/>
          <CardColor color = "cyan" title = "1.5k" text = "New visitors"/>
          <CardColor color = "pink" title = "50%" text = "Bounce Rate"/>
        </Row>
        <Row>
          <CardLarge style = {{background: "#298bff", padding: "0"}}/>
          <CardColor color = "red"  title = "28%" text = "Searchs"/>
          <CardColor color = "green" title = "140.5kb" text = "Traffic"/>
        </Row>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
