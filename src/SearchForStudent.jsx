import React from 'react'
import { Redirect, useHistory, withRouter } from 'react-router-dom';

class SearchForStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: "",
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
      this.props.history.push({
        pathname: 'searchresult',
        state: { query: this.state.search_value }
      });
    }
  }

  render() {
    return (
      <div className="w-100">
        <input
          className="form-control form-control-dark w-100"
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Search by student name"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default withRouter(SearchForStudent);
