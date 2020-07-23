// @flow

import React, { Component } from "react";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: "",
  };

  props: {
    shows: Array<Show>,
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              (show) =>
                `${show.title} ${show.description}`
                  .toLocaleLowerCase()
                  .indexOf(this.state.searchTerm) >= 0
            )
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
