import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <div classNameName="banner">
          <p classNameName="App-intro">
            <h2 classNameName="hero-text">PreVju</h2>
              <p classNameName="hero-slogan">the smart way to interview</p>
          </p>
        </div>
      </div>




    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2014</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Be Part
                                    Of Our
                                    Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    </div>

    );
  }
}

export default Landing;
