import React from "react";
import { render } from "react-dom";

const SecondComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const FirstComponent = () => {
  return (
    <div>
      <h1>Heading</h1>
      <SecondComponent title="Rick and Morty" />
    </div>
  );
};

render(<FirstComponent />, document.getElementById("app"));
