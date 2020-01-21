import React from 'react'
import { Redirect } from 'react-router-dom';

class SearchForStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: "",
      redirect_flag: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({
      search_value: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState({
        redirect_flag: true
      });
    }
  }

  render() {
    if (!this.state.redirect_flag) {
      return (
        <div className="w-100">
          <input className="form-control form-control-dark w-100" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Search by student name" aria-label="Search"/>
        </div>
      );
    }

    //This has to be removed, render() has to be a pure function.
    else if (this.state.redirect_flag) {
      this.setState({
        redirect_flag: false
      });

      return (
        <div className="w-100">
          <input className="form-control form-control-dark w-100" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Search by student name" aria-label="Search"/>
          <Redirect
            to={{
              pathname: "/searchresult",
              state: { query: this.state.search_value }
            }}
           />
        </div>
      );
    }
  }
}

export default SearchForStudent;
