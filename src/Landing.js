import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import './Landing.css';



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

            <div className="intro-lead-in">Looking to hire?</div>
            <div className="intro-heading">Interviewing made easier, cheaper and faster! </div>
            <Link to='/createformview' className="page-scroll btn btn-xl">Tell Me More </Link>


        </div>
    </div>
    </header>
    <div className="center" >
      <h2>Why prevju?</h2>
      <div className="circle-container">
        <span className="circle" id="cost-white"></span>
        <span className="circle" id="icon-time-white"></span>
        <span className="circle" id="human-white"></span>
      </div>
      <div className="circle-container">
        <span>Save cost</span>
        <span >Save time</span>
        <span >Hire all-stars</span>
      </div>
    </div>
    <div className="center" style={{backgroundColor: '#f7f7f7', marginTop:0, marginBottom: 0}} >
      {/* <div className="circle-container">
        <span className="circle" id="cost-white"></span>
        <span className="circle" id="icon-time-white"></span>
        <span className="circle" id="human-white"></span>
      </div>
      <div className="circle-container">
        <span><span style={{fontSize: '35px'}}>1.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eleifend risus. Phasellus non lacus augue. Praesent ut lacinia erat. Integer accumsan, orci a pretium consectetur, elit ligula viverra arcu, vel iaculis enim mauris ac eros.</span>
        <span><span style={{fontSize: '35px'}}>2.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eleifend risus. Phasellus non lacus augue. Praesent ut lacinia erat. Integer accumsan, orci a pretium consectetur, elit ligula viverra arcu, vel iaculis enim mauris ac eros.</span>
        <span><span style={{fontSize: '35px'}}>3.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et eleifend risus. Phasellus non lacus augue. Praesent ut lacinia erat. Integer accumsan, orci a pretium consectetur, elit ligula viverra arcu, vel iaculis enim mauris ac eros.</span>
      </div> */}
      {/* <!-- About Section --> */}

         <section id="about">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-12 text-center">
                         <h2 className="section-heading">How it works</h2>
                         <h3 className="section-subheading text-muted">Three steps, that's all you need to do.</h3>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-lg-12">
                         <ul className="timeline">
                             <li>
                                 <div className="timeline-image">
                                     {/* <img className="img-circle img-responsive" src="img/about/1.jpg" alt=""> */}
                                 </div>
                                 <div className="timeline-panel">
                                     <div className="timeline-heading">
                                         <h4 className="subheading">1. Get started</h4>
                                     </div>
                                     <div className="timeline-body">
                                         <p className="text-muted">Create a preVju account and choose interview questions.</p>
                                     </div>
                                 </div>
                             </li>
                             <li className="timeline-inverted">
                                 <div className="timeline-image">
                                     {/* <img className="img-circle img-responsive" src="img/about/2.jpg" alt=""> */}
                                 </div>
                                 <div className="timeline-panel">
                                     <div className="timeline-heading">
                                         <h4 className="subheading">2. Wait</h4>
                                     </div>
                                     <div className="timeline-body">
                                         <p className="text-muted">Potential candidates dial in to preVju and record their answers.</p>
                                     </div>
                                 </div>
                             </li>
                             <li>
                                 <div className="timeline-image">
                                     {/* <img className="img-circle img-responsive" src="img/about/3.jpg" alt=""> */}
                                 </div>
                                 <div className="timeline-panel">
                                     <div className="timeline-heading">
                                         <h4 className="subheading">3. Get your all-stars</h4>
                                     </div>
                                     <div className="timeline-body">
                                         <p className="text-muted">We analyse the answers and screen out the best.</p>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </section>

    </div>



    </div>

    );
  }
}

export default Landing;
