import React from "react";
import { ReactDOM } from "react";


const heading = React.createElement(
    "h1",
    { id: "lal" }, // Here we write the attribute of element
    "This is heading inside reach"
  );
  
  const display = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "THis is h1 inside the child"),
      React.createElement("h2", {}, "This is h2 inside child"),
    ])
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(display);
  
