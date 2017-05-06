import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import StandardQuestions from './StandardQuestions.js'

class Interviewstep2 extends Component {
  constructor(props){
    super(props);
    this.question1 = this.question1.bind(this)
    this.question2 = this.question2.bind(this)
    this.question3 = this.question3.bind(this)
  }

  componentWillMount(){
    const script = document.createElement("script");

    script.src = "https://code.responsivevoice.org/responsivevoice.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount(){
    this.question1();
  }

  render() {
    return (

      <div className="App">


        <div className="interview-container">
        <div className="container">

        <div className="row">
          <div className="col">
          <h1>Question 1</h1>
          </div>
          <div className="col textmic">


          <div class="">
            <p>{StandardQuestions.Question1()}</p>
          </div>

          <div className="mic"></div>


          </div>
          <div className="col">
          <a href="#services" className="page-scroll btn btn-xl">Submit Answer</a>
          </div>
        </div>


      </div>

      </div>
      </div>

    );
  }
  question1(){
    window.responsiveVoice.speak(StandardQuestions.Question1())
  }
  question2(){
    window.responsiveVoice.speak(StandardQuestions.Question2())
  }
  question3(){
    window.responsiveVoice.speak(StandardQuestions.Question3())
  }
}

export default Interviewstep2;
