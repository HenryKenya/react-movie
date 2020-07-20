import React from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

const Search = () => (
  <div className="search">
    <div>
      {preload.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
);

export default Search;
