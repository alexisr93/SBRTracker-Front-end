import React from 'react';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num_pending: 0,
      num_resolved_today: 0,
      num_resolved_week: null,
      items: []
    }
  }

  countNumPending() {
    let count_pending = 0;

    this.state.items.forEach(item => {
      if(item.status === "Pending") {
        count_pending++;
      }
    });

    this.setState({
      num_pending: count_pending
    });
  }
  countNumResolvedToday() {
    let count_resolved = 0;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    var yy = today.getFullYear().toString().substring(2, 4)

    today = mm + '/' + dd + '/' + yy;

    this.state.items.forEach(item => {
      if(item.date_resolved === today){
        count_resolved++;
      }
    });

    this.setState({
      num_resolved_today: count_resolved
    });
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

          this.countNumPending();
          this.countNumResolvedToday();

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
                <h3 className="card-title">Resolved Today: {this.state.num_resolved_today}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Resolved This Week: {this.state.num_resolved_week}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
