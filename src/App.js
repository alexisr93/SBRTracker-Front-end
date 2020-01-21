import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import DashBoard from './DashBoard';
import Pending from './Pending';
import Resolved from './Resolved';
import NewReferral from './NewReferral';
import Update from './Update'
import SearchResult from './SearchResult';
//import SignIn from './SignIn.jsx'
import SearchForStudent from './SearchForStudent'

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
          <SearchForStudent></SearchForStudent>
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
              <NavLink to="/dashboard">
                <i data-feather="home"></i>
                Dashboard
              </NavLink>
          </li>
          <li className="nav-link">
              <NavLink to="/pending">
                <i data-feather="alert-circle"></i>
                Pending
              </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/resolved">
              <i data-feather="check-circle"></i>
              Resolved
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/newreferral">
                <i data-feather="plus-square"></i>
              New Referral
            </NavLink>
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
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/pending" component={Pending} />
          <Route path="/resolved" component={Resolved} />
          <Route path="/newreferral" component={NewReferral} />
          <Route path="/update" component={Update} />
          <Route path="/searchresult" component={SearchResult} />
        </Switch>
      </div>
    );
  }
}

export default App;
