// @flow
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./redux/actionCreators";

const Header = (props: {
  showSearch?: boolean,
  searchTerm: string,
  handleSearchTermChange: Function,
}) => {
  let utilSpace;
  const { searchTerm, handleSearchTermChange } = props;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/"> svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};
Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
