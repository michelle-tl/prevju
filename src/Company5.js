import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Company5 extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App" style={{width: '100%', height: '100vh'}}>

            <div className="createform" id="companyCandidates"></div>

      </div>
    );
  }
}

export default Company5;
