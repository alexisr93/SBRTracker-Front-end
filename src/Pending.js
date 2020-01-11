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
    this.handleClick = this.handleClick.bind(this);
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
  handleClick(event){
    fetch("http://localhost:5000/incidents/" + event.target.name, {
      method: "delete",
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
        window.location.reload(false);
        }
      )
  }

  render() {
    const items = [];
    if(this.state.items)
    this.state.items.forEach(item => {
      if(item.status == "Pending"){
        items.push(
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.middle_name}</td>
            <td>{item.last_name}</td>
            <td>{item.grade}</td>
            <td>{item.class_period}</td>
            <td>{item.date_of_incident}</td>
            <td>{item.incident_type}</td>
            <td>{item.previous_intervention}</td>
            <td>{item.incident_description}</td>
            <td>
              <button type="submit" className="btn btn-dark" name={item.id} onClick={this.handleClick}>Delete</button>
              <Link to={{
                pathname: "/update",
                param1: item.id
              }}>
              <button type="button" className="btn btn-secondary">Update</button></Link>
            </td>
          </tr>
        )
      }

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
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Grade</th>
                <th>Class Period</th>
                <th>Date of Incident</th>
                <th>Type</th>
                <th>Previous Intervention</th>
                <th>Description</th>
                <th></th>
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
