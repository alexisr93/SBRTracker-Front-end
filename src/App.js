import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import DashBoard from './DashBoard.js';
import Pending from './Pending.js';
import Resolved from './Resolved.js';
import NewReferral from './NewReferral.js';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar></NavBar>
    			<div className="container-fluid">
    				<div className="row">
              <nav className="col-md-2 col-lg-1 d-none d-md-block bg-light sidebar">
                <SideBar></SideBar>
              </nav>
    					<main role="main" className="col-md-10 col-lg-11 ml-md-auto px-4">
                <MainSwitch></MainSwitch>
    					</main>
    				</div>
    			</div>
        </div>
      </Router>
    </div>
  );
}

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-md-2 col-lg-1 mr-0">SBRTracker</a>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search by student name" aria-label="Search"/>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-link">
              <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-link">
              <NavLink to="/pending">Pending</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/resolved">Resolved</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/newreferral">New Referral</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class MainSwitch extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/pending">
            <Pending></Pending>
          </Route>
          <Route path="/resolved">
            <Resolved></Resolved>
          </Route>
          <Route path="/newreferral">
            <NewReferral></NewReferral>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
