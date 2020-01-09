import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class Pending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        items: []
    };
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
        },
        (error) => {
          this.setState({
            isLoaded: true
          });
        }
      )

  }
  render() {
    const items = [];
    this.state.items.forEach(item => {
      items.push(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.first_name}</td>
          <td>{item.middle_name}</td>
          <td>{item.last_name}</td>
          <td>{item.grade}</td>
          <td>{item.class_period}</td>
          <td>{item.date_of_incident}</td>
          <td>{item.incident_type}</td>
          <td>{item.previous_intervention}</td>
          <td>{item.incident_description}</td>
        </tr>
      )
    })
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Pending</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>ID#</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Grade</th>
                <th>Class Period</th>
                <th>Date of Incident</th>
                <th>Type</th>
                <th>Previous Intervention</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Pending;
