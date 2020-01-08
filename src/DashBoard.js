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
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Pending:</h3>
                <p class="card-text">Sample Text</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Resolved Today:</h3>
                <p class="card-text">Sample Text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Resolved This Week:</h3>
                <p class="card-text">Sample Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
