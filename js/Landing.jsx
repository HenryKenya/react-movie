// @flow
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./redux/actionCreators";

const Landing = (props: {
  searchTerm: string,
  handleSearchTermChange: Function,
}) => (
  <div className="landing">
    <h1>svideo</h1>
    <input
      type="text"
      placeholder="Search"
      value={props.searchTerm}
      onChange={props.handleSearchTermChange}
    />
    <Link to="/search">or Browser All</Link>
  </div>
);

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
