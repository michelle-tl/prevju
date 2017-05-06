import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Interviewstep2 extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
        <div className="interview-container">
          Interview step 2
        </div>
      </div>
    );
  }
}

export default Interviewstep2;
