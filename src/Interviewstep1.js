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
        <div className="interview-container">
          <div className="Interview">
            <h2>Choose your interview channel:</h2>
              <div className="interview-alternatives">
              {/* <span>Intervjusidan 1</span> */}
              <Link to='/interviewstep2' className="prevju"></Link>
              <span className="mrphone phone-center glyphicon glyphicon-earphone"  aria-hidden="true"></span>
              <span className="skype" aria-hidden="true"></span>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interviewstep1;
