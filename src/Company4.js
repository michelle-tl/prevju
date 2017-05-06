import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Company4 extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App" style={{width: '100%', height: '100vh'}}>

            <Link to='/createformview5'><div className="createform" id="company4"></div></Link>

      </div>
    );
  }
}

export default Company4;
