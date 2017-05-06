import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Companychoosequestions extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App" style={{width: '100%', height: '100vh'}}>

            <Link to='/createformview3'><div className="createform"></div></Link>

      </div>
    );
  }
}

export default Companychoosequestions;
