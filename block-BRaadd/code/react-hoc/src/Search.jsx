import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <div className="page">
        <input
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        {this.props.render(this.state.searchTerm)}
      </div>
    );
  }
}

export default Search;
