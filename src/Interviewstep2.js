import React, { Component } from 'react';
import logo from './logo.svg';
import './Interview.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import StandardQuestions from './StandardQuestions.js'

class Interviewstep2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      questionNumber: 1
    }
    this.question1 = this.question1.bind(this)
    this.question2 = this.question2.bind(this)
    this.question3 = this.question3.bind(this)
    this.onClickMic = this.onClickMic.bind(this)
    this.toggleQuestion = this.toggleQuestion.bind(this)
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

  getQuestion(){
    if(this.state.questionNumber == 1){
      return <p>{StandardQuestions.Question1()}</p>
    } else if(this.state.questionNumber == 2) {
      return <p>{StandardQuestions.Question2()}</p>
    } else if(this.state.questionNumber == 3){
      return <p>{StandardQuestions.Question3()}</p>
    }
  }

  toggleQuestion(){
    console.log("here")
    var number;
    if(this.state.questionNumber == 1){
      number = 2;
      this.question2();
    } else if(this.state.questionNumber == 2) {
      number = 3
      this.question3();
    } else if(this.state.questionNumber == 3){
      //next view
    }
    this.setState({
      questionNumber: number
    })
  }
  getMicButton(){
    if(this.state.clicked){
      return <a onClick = {this.onClickMic} className="row mic-active interview-container"></a>
    } else {
      return <a onClick = {this.onClickMic} className="row mic interview-container"></a>
    }
  }

  onClickMic(){
    if(this.state.clicked){
      this.setState({
        clicked: false
      })
    } else {
      this.setState({
        clicked: true
      })
    }

    console.log(this.state.clicked)
  }

  getButton(){
    if(this.state.questionNumber == 3){
      return <Link to='/interviewstep3' className="page-scroll btn btn-xl">Submit</Link>
    } else {
      return <a onClick = {this.toggleQuestion} className="page-scroll btn btn-xl">Next Question</a>
    }
  }

  getTitle(){
    if(this.state.questionNumber == 1){
      return <h1>Question 1</h1>
    } else if(this.state.questionNumber == 2) {
      return <h1>Question 2</h1>
    } else if(this.state.questionNumber == 3){
      return <h1>Question 3</h1>
    }

  }

  render() {
    return (

      <div className="App">


        <div className="interview-container">
        <div className="container">

        <div className="row">
          <div className="col">
          {this.getTitle()}
          </div>

          <div className="row center">
            <div className="">
              {this.getQuestion()}
            </div>

            {this.getMicButton()}
          </div>

          </div>
          <div className="col">
          {this.getButton()}
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
