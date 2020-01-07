import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

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

export default DashBoard;
