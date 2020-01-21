import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
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
  s
  render() {
    return(
      <div>
        <h1>{this.props.location.state.query}</h1>
      </div>
    );
  }
}
export default SearchResult;
