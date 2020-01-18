import React from 'react'

class ListOfStudents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: this.props.query,
      search_results: this.props.result
    };
  }

  componentDidMount() {
    const regex = new RegExp(this.state.query);

    this.setState({
      search_results: this.props.result.filter(incident => incident.student_name.test(regex))
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

class SearchForStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: "",
      api_response: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/incidents')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            api_response: result
          });
        },
        (error) => {
          this.setState({
            //TODO
          });
        }
      )
  }

  handleChange(event) {
    this.setState({
      search_value: event.target.value
    });
  }

  render() {
    return (
      <div className="w-100">
        <input className="form-control form-control-dark w-100" type="text" onChange={this.handleChange} placeholder="Search by student name" aria-label="Search"/>
        <ListOfStudents result={this.state.api_response} query={this.state.search_value}></ListOfStudents>
        {console.log(this.state.api_response)}
      </div>
    );
  }
}

export default SearchForStudent;
