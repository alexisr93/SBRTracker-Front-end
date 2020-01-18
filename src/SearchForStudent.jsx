import React from 'react'

class ListOfStudents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: this.props.query,
      searchResults: []
    };
  }

  componentDidMount() {
    const regex = new RegExp(this.props.query);

    this.setState = {
      searchResults: this.props.result.filter(incident => incident.student_name.test(regex))
    };

    console.log(this.state.searchResults);
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
      searchValue: "",
      apiResult: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getSearchResults() {
    fetch('http://localhost:5000/incidents')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState = {
            apiResult: result
          }
        },
        (error) => {
          this.setState = {
            apiResult: []
          }
        }
      )
  }

  handleChange(event) {
    this.setState = {
      searchValue: event.target.value
    }

    this.getSearchResults();
    console.log(this.state.apiResult);
  }

  render() {
    return (
      <div className="w-100">
        <input className="form-control form-control-dark w-100" type="text" onChange={this.handleChange} placeholder="Search by student name" aria-label="Search"/>
        <ListOfStudents result={this.state.apiResult} query={this.state.searchValue}></ListOfStudents>
      </div>
    );
  }
}

export default SearchForStudent;
