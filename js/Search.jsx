// @flow

import React from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = (props: {
  // eslint-disable-next-line react/no-unused-prop-types
  searchTerm: string,
  shows: Array<Show>,
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          (show) =>
            `${show.title} ${show.description}`
              .toLocaleLowerCase()
              .indexOf(props.searchTerm) >= 0
        )
        .map((show) => (
          <ShowCard {...show} key={show.imdbID} />
        ))}
    </div>
  </div>
);

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });

export default connect(mapStateToProps)(Search);
