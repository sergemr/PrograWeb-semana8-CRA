import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";

it("It should mount", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
