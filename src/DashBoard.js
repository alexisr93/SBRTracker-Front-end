import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num_pending: null,
      num_resolved_today: null,
      num_resolved_week: null,
      items: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/incidents")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

          let count_pending = 0;
          this.state.items.forEach(item => {
            if(item.status === "Pending") {
              count_pending++;
            }
          });
          this.setState({
            num_pending: count_pending
          });
        },
        (error) => {
          this.setState({
            isLoaded: true
            //TODO
          });
        }
      )


  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Dashboard</h2>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Pending: {this.state.num_pending}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Resolved Today:</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Resolved This Week:</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
