import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseHelper from './FirebaseHelper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="align-left">prevju</p>
          <div className="menu">
          <p >Intervjusidan</p>
          <p >titel</p>
          <p >titel2</p>
        </div>
        </div>
        <div className="">
          <p className="App-intro">
            <h2>Welcome to Prevju</h2>
          Landing page
          </p>
        </div>
      </div>
    );
  }
}

export default App;
