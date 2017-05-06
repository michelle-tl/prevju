import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Company3 extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App" style={{width: '100%', height: '100vh'}}>

            {/* <Link to='/createformview' className="page-scroll btn btn-xl"><div className="wanttohire"></div></Link> */}
            <Link to='/createformview4'><div className="createform" id="company3"></div></Link>

      </div>
    );
  }
}

export default Company3;
