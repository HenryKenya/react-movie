import React from "react";
import { render } from "react-dom";

const SecondComponent = ({ title }) => {
  return React.createElement("div", {}, React.createElement("h2", {}, title));
};

const FirstComponent = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Heading"),
    React.createElement(SecondComponent, {
      title: "Rick and Morty",
    }),
    React.createElement(SecondComponent, {
      title: "Silicon Valley",
    })
  );
};

render(React.createElement(FirstComponent), document.getElementById("app"));
