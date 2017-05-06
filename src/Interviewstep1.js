import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'


class Interviewstep1 extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <p className="Interview">
            <h2>Choose your interview channel:</h2>
              <div className="interview-alternatives">
              <span>Intervjusidan 1</span>
              <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
              <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>

            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Interviewstep1;
