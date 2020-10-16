import React from "react";
import "./Search.css";
import Plot from "../Plot/Plot.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryInput: null, fetchData: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ countryInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.countryInput = this.state.countryInput.toLowerCase();
    const fetchURL = `https://api.covid19api.com/dayone/country/${this.state.countryInput}/status/confirmed/live`;
    console.log(fetchURL);
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].Date = data[i].Date.slice(0, 10);
        }
        this.setState({ fetchData: data });
      });
  }

  render() {
    return (
      <div className="SearchContainer">
        <div className="SearchBar">
          <input
            type="text"
            id="country-input"
            placeholder="Country..."
            value={this.state.countryInput}
            onChange={this.handleChange}
          />
          <input
            type="button"
            id="submit-button"
            value="SHOW"
            onClick={this.handleSubmit}
          />
        </div>
        {this.state.fetchData ? <Plot data={this.state.fetchData} /> : ""}
      </div>
    );
  }
}

export default Search;
