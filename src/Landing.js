import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Landing extends Component {
  render() {
    return (
      <div>
      <div classNameName="App banner">
        {/* <div classNameName="App-header">
          <p classNameName="align-left">prevju</p>
          <div classNameName="menu">
          <p >Intervjusidan</p>
          <p >titel</p>
          <p >titel2</p>
        </div>
        </div> */}

      </div>



    <header>
    <div className="container">
        <div className="intro-text">
            <div className="intro-lead-in">Searching for potential employees?</div>
            <div className="intro-heading">Look no further!</div>
            <Link to='/createformview' className="page-scroll btn btn-xl">Tell Me More </Link>
            
        </div>
    </div>
    </header>




    </div>

    );
  }
}

export default Landing;
