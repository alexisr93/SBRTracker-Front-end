import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

class NewReferral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      middle_name: null,
      last_name: null,
      grade: null,
      class_period: null,
      date_of_incident: null,
      incident_type: null,
      previous_intervention: null,
      incident_description: null,
      status: null,
      resolution: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("A value changed")
  }
  handleSubmit(event) {
    fetch('http://localhost:3000/', {
      method:'post',
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('POST data: ' + result);
        },
        (error) => {
          this.setState({
            //TODO
          });
        }
      )
    event.preventDefault(); // Check if i need this here
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">New Referral</h2>
        </div>
        <div className="row">
        <div className="col-md-12 col-lg-6">
        <form>
          <div className="form-group">
            <label>Student Name</label>
            <div className="row">
              <div className="col">
              <input type="text" className="form-control" name="first_name" onChange={this.handleChange} placeholder="First Name"/>
              </div>
              <div className="col">
              <input type="text" className="form-control" name="middle_name" onChange={this.handleChange} placeholder="Middle Name"/>
              </div>
              <div className="col">
              <input type="text" className="form-control" name="last_name" onChange={this.handleChange} placeholder="Last Name"/>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Grade</label>
                <select className="form-control" name="grade" onChange={this.handleChange}>
                  <option selected disabled>Select Grade</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                </select>
              </div>
              <div className="col">
                <label>Class Period</label>
                <select className="form-control" name="class_period" onChange={this.handleChange}>
                  <option selected disabled>Select Period</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col">
                <label>Date of Incident</label>
                <input type="text" className="form-control" name="date_of_incident" onChange={this.handleChange} placeholder="MM/DD/YY"/>
              </div>
              <div className="col">
                <label>Incident Type</label>
                <select className="form-control" id="incidenetType">
                  <option selected disabled>Select Type</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Previous Intervention</label>
            <select className="form-control" name="previous_intervention" onChange={this.handleChange} id="previousIntervention">
              <option selected disabled>Select Previous Intervention</option>
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
            <label>Incident Description</label>
            <textarea className="form-control" name="incident_description" onChange={this.handleChange} rows="3" placeholder="Enter description."></textarea>
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <button type="reset" className="btn btn-secondary">Reset</button>
                  <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}
export default NewReferral;
