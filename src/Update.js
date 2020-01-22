import React from 'react';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.param1,
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

  componentDidMount() {
    fetch("http://localhost:5000/incidents/" + this.state.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            first_name: result.first_name,
            middle_name: result.middle_name,
            last_name: result.last_name,
            grade: result.grade,
            class_period: result.class_period,
            date_of_incident: result.date_of_incident,
            incident_type: result.incident_type,
            previous_intervention: result.previous_intervention,
            incident_description: result.incident_description,
            status: result.status,
            resolution: result.resolution,
          });
        },
        (error) => {
          this.setState({
            //TODO
          });
        },
      )
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      status: "Resolved"
    });
  }

  handleSubmit(event) {
    fetch('http://localhost:5000/incidents/' + this.state.id, {
      method:'put',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log('PUT data: ' + result);
        },
        (error) => {
          this.setState({
            status: "Pending"
          });
        }
      )
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Update</h2>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-6">
            <form>
              <div className="form-group">
                <label>Student Name</label>
                <div className="row">
                  <div className="col">
                  <h4>{this.state.first_name} {this.state.middle_name} {this.state.last_name}</h4>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Grade</label>
                    <h4>{this.state.grade}</h4>
                  </div>

                  <div className="col">
                    <label>Class Period</label>
                    <h4>{this.state.class_period}</h4>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Date of Incident</label>
                    <h4>{this.state.date_of_incident}</h4>
                  </div>
                  <div className="col">
                    <label>Incident Type</label>
                    <h4>{this.state.incident_type}</h4>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Previous Intervention</label>
                <h4>{this.state.previous_intervention}</h4>
              </div>

              <div className="form-group">
                <label>Incident Description</label>
                <h4>{this.state.incident_description}</h4>
              </div>

              <div className="form-group">
                <label>Resolution</label>
                <div className="row">
                  <div className="col">
                    <textarea
                      className="form-control"
                      type="text"
                      name="resolution"
                      onChange={this.handleChange}
                      rows="5"
                      placeholder="Enter description.">
                    </textarea>
                  </div>
                </div>
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
                      <button
                        type="submit"
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
export default Update;
