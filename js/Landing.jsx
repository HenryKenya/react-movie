// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import type { RouterHistory } from "react-router-dom";
import { setSearchTerm } from "./redux/actionCreators";

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory,
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push("/search");
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search">or Browser All</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
