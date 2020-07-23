// @flow
import React from "react";
import { Link } from "react-router-dom";

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange?: Function,
  searchTerm?: string,
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
  handleSearchTermChange: function noop() {},
  searchTerm: "",
};
export default Header;
