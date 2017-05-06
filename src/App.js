import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import Landing from './Landing.js';
import './App.css';
import FirebaseHelper from './FirebaseHelper'
import Interviewstep1 from './Interviewstep1.js'
import Interviewstep2 from './Interviewstep2.js'
import Interviewstep3 from './InterviewEnd.js'
import Companychoosequestions from './Companychoosequestions.js'
import CreateFormView from './CreateFormView.js'
import Company3 from './Company3.js'
import Company4 from './Company4.js'
import Company5 from './Company5.js'


class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Landing} />
          <Route path='/interviewstep1' component={Interviewstep1}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='/interviewstep2' component={Interviewstep2} />
          <Route path='/interviewstep3' component={Interviewstep3}/>
          <Route path='/createformview' component={CreateFormView} />
          <Route path='/createformview2' component={Companychoosequestions} />
          <Route path='/createformview3' component={Company3} />
          <Route path='/createformview4' component={Company4} />
          <Route path='/createformview5' component={Company5} />

          <Route path='*' component={NotFound} />
        </Route>

      </Router>
    )
  }
}

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const NamedComponents = (props) => (
	<div>
    {props.title}<br />
    {props.subTitle}
	</div>
)

const Nav = () => (
  <div className="App-header">
    <IndexLink activeClassName='active' className="prevju-logo" to='/'></IndexLink>&nbsp;
    <div className="menu">
    <IndexLink activeClassName='active' to='/interviewstep1'>Preview preVju</IndexLink>&nbsp;
    {/* <IndexLink activeClassName='active' to='/in'>titel2</IndexLink>&nbsp; */}
    {/* <IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</IndexLink> */}
  </div>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

// const Interviewstep2 = (props) => <div>
//   <br />
//   <Link to='/address'>Twitter Feed</Link>&nbsp;
//   <Link to='/address/instagram'>Instagram Feed</Link>
//   <h1>We are located at 555 Jackson St.</h1>
//   {props.children}
// </div>

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
