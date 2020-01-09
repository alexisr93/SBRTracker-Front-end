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
      //TODO
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          //TODO
          });
        },
        (error) => {
          this.setState({
            //TODO
          });
        }
      )
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
                <label htmlFor="inputGrade">Grade</label>
                <select className="form-control" id="formControlGrade">
                  <option selected disabled>Select Grade</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="inputPeriod">Class Period</label>
                <select className="form-control" id="formControlClassPeriod">
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
                <label htmlFor="exampleInputPassword1">Date of Incident</label>
                <input type="password" className="form-control" id="dateOfIncident" placeholder="MM/DD/YY"/>
              </div>
              <div className="col">
                <label htmlFor="exampleInputPassword1">Incident Type</label>
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
            <label htmlFor="exampleInputPassword1">Previous Intervention</label>
            <select className="form-control" id="previousIntervention">
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
            <label htmlFor="exampleInputPassword1">Incident Description</label>
            <textarea className="form-control" id="incidentDescription" rows="3" placeholder="Enter description."></textarea>
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <button type="reset" className="btn btn-secondary">Reset</button>
                  <button type="submit" className="btn btn-dark">Submit</button>
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
