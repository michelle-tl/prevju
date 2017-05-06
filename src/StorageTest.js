import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseHelper from './FirebaseHelper'
import StandardQuestions from './StandardQuestions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: ""
    }
    this.testClick = this.testClick.bind(this)
    this.setFileState = this.setFileState.bind(this)
    this.question1 = this.question1.bind(this)
    this.question2 = this.question2.bind(this)
    this.question3 = this.question3.bind(this)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="align-left">prevju</p>
          <div className="menu">
          <p >Intervjusidan</p>
          <p >titel</p>
          <p >titel2</p>
        </div>
        </div>
        <div className="">
          <p className="App-intro">
            <h2>Welcome to Prevju</h2>
          </p>

        </div>
        <input id='fileButton' value='upload' type="file"/>
        <button id ='test' type='button' onClick = {this.testClick}>Test</button>
        <input onClick={this.question1} type='button' value='🔊 Play' />
        <input onClick={this.question2} type='button' value='🔊 Play' />
        <input onClick={this.question3} type='button' value='🔊 Play' />
      </div>
    );
  }

  componentWillMount(){
    const script = document.createElement("script");

    script.src = "https://code.responsivevoice.org/responsivevoice.js";
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount(){
    var fileButton = document.getElementById('fileButton')
    var file = "";
    var setFileState = this.setFileState;
    fileButton.addEventListener('change', function(e) {
      file = e.target.files[0]
      FirebaseHelper.addAudio(file);
      console.log(file.name)
      setFileState(file)
      console.log("success")
    });


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

  setFileState(file){
    this.setState({
      file: file.name
    })
  }

  testClick(){
    FirebaseHelper.getAudio(this.state.file).then((url) => {
      console.log(url + "test")
    });
  }
}

export default App;
