import React from 'react'

class ListOfStudents extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      search_results: []
    };
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

  render() {
    return (
      <div>
        {this.state.search}
      </div>
    );
  }
}

class SearchForStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: "",
    }
    this.handleChange = this.handleChange.bind(this);
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
          <ListOfStudents query={this.state.search_value}></ListOfStudents>
      </div>
    );
  }
}

export default SearchForStudent;
