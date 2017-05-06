import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App banner">
        {/* <div className="App-header">
          <p className="align-left">prevju</p>
          <div className="menu">
          <p >Intervjusidan</p>
          <p >titel</p>
          <p >titel2</p>
        </div>
        </div> */}
        <div className="banner">
          <p className="App-intro">
            <h2 className="hero-text">PreVju</h2>
              <p className="hero-slogan">the smart way to interview</p>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
