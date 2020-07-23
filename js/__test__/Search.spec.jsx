// @flow
import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

describe("Search", () => {
  it("renders correctly", () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component).toMatchSnapshot();
  });

  it("should render correct amount of shows given no search term", () => {
    const component = shallow(<Search shows={preload.shows} />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it("should render correct amount of shows based on the search term given", () => {
    const searchWord = "black";
    const component = shallow(<Search shows={preload.shows} />);
    const showCount = preload.shows.filter(
      (show) =>
        `${show.title} ${show.description}`
          .toLowerCase()
          .indexOf(searchWord.toLowerCase()) >= 0
    ).length;
    component
      .find("input")
      .simulate("change", { target: { value: searchWord } });

    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
