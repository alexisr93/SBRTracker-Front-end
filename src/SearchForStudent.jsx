import React from 'react'

class ListOfStudents extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

class Student extends React.Component {
  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

class SearchForStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      apiResult: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getSearchResults() {
    fetch('http://localhost:5000/incidents/', {
      method:'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState = {
            apiResult: result
          }
        },
        (error) => {
          //TODO
        }
      )
  }

  handleChange(event) {
    this.setState = {
      searchValue: event.target.value
    }

    this.getSearchResults();
  }

  render() {
    return (
      <div className="w-100">
        <input className="form-control form-control-dark w-100" type="text" onChange={this.handleChange} placeholder="Search by student name" aria-label="Search"/>
      </div>
    );
  }
}

export default SearchForStudent;
