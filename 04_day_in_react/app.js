import React from "react";
import ReactDOM from "react";

const heading = React.createElement(
    "h1",
    { id: "lal" }, // Here we write the attribute of element
    "This is heading inside reach"
  );

  const jxheading = (
    <h1>This is Asif raza</h1>
  );
  

  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(jxheading);
  
