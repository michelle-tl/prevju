import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import StandardQuestions from './StandardQuestions.js'

class InterviewEnd extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className="App">


        <div className="interview-container">
        <div className="container">

        <div className="row">
          <div className="col">
          <h1>Thanks for your interview!</h1>
          </div>
          <div className="col textmic">


          <div class="">
            <p>You're interview will be analyzed and sent to the company. Your analyzed interview will appear on your pages shortly.</p>
          </div>


          </div>
          <div className="col">
          <Link to='./interviewstep1' className="page-scroll btn btn-xl">Back to the frontpage</Link>
          </div>
        </div>


      </div>

      </div>
      </div>

    );
  }

}

export default InterviewEnd;
