import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import './dashboard.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
  			<div className="container-fluid">
  				<div className="row">
            <SideBar></SideBar>
  					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <MainSwitch></MainSwitch>
  					</main>
  				</div>
  			</div>
      </div>
    </Router>
  );
}

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Dashboard</h2>
        </div>
        <div className="row">
          <div className="col">
            <h3>Pending: </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Resolved Today: </h3>
          </div>
          <div className="col">
            <h3>Resolved This Week: </h3>
          </div>
        </div>
      </div>
    );
  }
}

class Pending extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Pending</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Resolved extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Resolved</h2>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              Today
            </button>
          </div>
        </div>

        <div className="table-responsive">
					<table className="table table-striped table-sm">
						<thead>
							<tr>
								<th>#</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
								<th>Header</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1,001</td>
								<td>Lorem</td>
								<td>ipsum</td>
								<td>dolor</td>
								<td>sit</td>
							</tr>
							<tr>
								<td>1,002</td>
								<td>amet</td>
								<td>consectetur</td>
								<td>adipiscing</td>
								<td>elit</td>
							</tr>
						</tbody>
					</table>
        </div>
      </div>
    );
  }
}

class NewReferral extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">New Referral</h2>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="inputStudentName">Student Name</label>
            <div className="row">
              <div className="col">
              <input type="student-name" className="form-control" id="firstName" placeholder="First Name"/>
              </div>
              <div className="col">
              <input type="student-name" className="form-control" id="middleName" placeholder="Middle Name"/>
              </div>
              <div className="col">
              <input type="student-name" className="form-control" id="lastName" placeholder="Last Name"/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="exampleInputPassword1">Grade</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="exampleInputPassword1">Class Period</label>
                <select className="form-control" id="classPeriod">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="exampleInputPassword1">Date of Incident</label>
                <input type="password" className="form-control" id="dateOfIncident" placeholder="Date"/>
              </div>
              <div className="col">
                <label htmlFor="exampleInputPassword1">Incident Type</label>
                <select className="form-control" id="incidenetType">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Previous Intervention</label>
            <select className="form-control" id="previousIntervention">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Specific Incident Information</label>
            <textarea className="form-control" id="specificIncidentInformation" rows="3"></textarea>
          </div>

          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <button type="reset" className="btn btn-danger">Reset</button>
                </div>
                <div class="col">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
            <div class="col">
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class NavBar extends React.Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0">SBRTracker</a>
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
      <div>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
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
        </nav>
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
