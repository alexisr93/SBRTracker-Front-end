import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

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
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="exampleInputPassword1">Class Period</label>
                <select className="form-control" id="classPeriod">
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
            <label htmlFor="exampleInputPassword1">Specific Incident Information</label>
            <textarea className="form-control" id="specificIncidentInformation" rows="3" placeholder="Enter text"></textarea>
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
export default NewReferral;
