// @flow
import React from "react";
import { shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import { setSearchTerm } from "../redux/actionCreators";
import preload from "../../data.json";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";

describe("Search", () => {
  it("renders correctly", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render correct amount of shows given no search term", () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it("should render correct amount of shows based on the search term given", () => {
    const searchWord = "black";
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>
    );
    const showCount = preload.shows.filter(
      (show) =>
        `${show.title} ${show.description}`
          .toLowerCase()
          .indexOf(searchWord.toLowerCase()) >= 0
    ).length;

    expect(component.find(".show-card").length).toEqual(showCount);
  });
});
