import React from 'react';

class NewReferral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      grade: "",
      class_period: "",
      date_of_incident: "",
      incident_type: "",
      previous_intervention: "",
      incident_description: "",
      status: "",
      resolution: "",
      first_name_validate: "form-control",
      last_name_validate: "form-control",
      date_of_incident_validate: "form-control",
      incident_description_validate: "form-control",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate() {
    let is_invalid = false;
    let first_name_validate = "form-control";
    let last_name_validate = "form-control";
    let date_of_incident_validate = "form-control";
    let incident_description_validate = "form-control";

    if (this.state.first_name === ""){
      first_name_validate = "form-control is-invalid";
      is_invalid = true;
    }
    if (this.state.last_name === "") {
      last_name_validate = "form-control is-invalid";
      is_invalid = true;
    }
    if (this.state.date_of_incident === "") {
      date_of_incident_validate = "form-control is-invalid";
      is_invalid = true;
    }
    if (this.state.incident_description === "") {
      incident_description_validate = "form-control is-invalid";
      is_invalid = true;
    }
    console.log("Is invalid is: " + is_invalid)
    if (is_invalid) {
      this.setState({
        first_name_validate,
        last_name_validate,
        date_of_incident_validate,
        incident_description_validate
      });
      return false;
    }
    else {
      this.setState({
        first_name_validate,
        last_name_validate,
        date_of_incident_validate,
        incident_description_validate
      });
      return true;
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("A value changed")
  }

  handleSubmit(event) {
    const is_valid = this.validate();
    if (is_valid) {
      fetch('http://localhost:5000/incidents', {
        method:'post',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log('POST data: ' + result);
            window.location.reload(false);
          },
          (error) => {
            this.setState({
              //TODO
            });
          }
        )
    }

    event.preventDefault();
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
                    <input
                      type="text"
                      className={this.state.first_name_validate}
                      name="first_name"
                      onChange={this.handleChange}
                      placeholder="First Name"
                    />
                    <div className="invalid-feedback">First name is required</div>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="middle_name"
                      onChange={this.handleChange}
                      placeholder="Middle Name"
                    />
                    </div>
                  <div className="col">
                    <input
                      type="text"
                      className={this.state.last_name_validate}
                      name="last_name"
                      onChange={this.handleChange}
                      placeholder="Last Name"
                    />
                    <div className="invalid-feedback">Last name is required</div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Grade</label>
                    <select
                      className="form-control"
                      name="grade"
                      onChange={this.handleChange}>
                      <option selected>Select Grade</option>
                      <option>6th</option>
                      <option>7th</option>
                      <option>8th</option>
                    </select>
                  </div>

                  <div className="col">
                    <label>Class Period</label>
                    <select
                      className="form-control"
                      name="class_period"
                      onChange={this.handleChange}>
                      <option selected>Select Period</option>
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
                    <input
                      type="text"
                      className={this.state.date_of_incident_validate}
                      name="date_of_incident"
                      onChange={this.handleChange}
                      placeholder="MM/DD/YY"
                    />
                    <div className="invalid-feedback">Date is required</div>
                  </div>

                  <div className="col">
                    <label>Incident Type</label>
                    <select
                      className="form-control"
                      name="incident_type"
                      onChange={this.handleChange}>
                      <option selected>Select Type</option>
                      <option>Dress Code Violation</option>
                      <option>Physical Agression</option>
                      <option>Defiance</option>
                      <option>Harrassment</option>
                      <option>Bullying</option>
                      <option>Technology Violation</option>
                      <option>Other Misconduct</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Previous Intervention</label>
                <select
                  className="form-control"
                  name="previous_intervention"
                  onChange={this.handleChange}
                  id="previousIntervention">
                  <option selected>Select Previous Intervention</option>
                  <option>Student Warning</option>
                  <option>Parent Contact</option>
                  <option>Previous Referral</option>
                </select>
              </div>

              <div className="form-group">
                <label>Incident Description</label>
                <textarea
                  className={this.state.incident_description_validate}
                  name="incident_description"
                  onChange={this.handleChange}
                  rows="3"
                  placeholder="Enter description.">
                </textarea>
                <div className="invalid-feedback">A description is required</div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <button
                        type="reset"
                        className="btn btn-secondary">
                        Reset
                        </button>
                      <button type="submit"
                        className="btn btn-dark"
                        onClick={this.handleSubmit}>
                        Submit
                      </button>
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
