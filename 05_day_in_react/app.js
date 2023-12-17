import React from "react";
import ReactDOM from 'reactdom';

// React component 
// Functional React component
const Heading = () => {
    return <h1>This is a React component</h1>;
}

// Find the root element by its ID
const rootElement = document.getElementById("root");

// Render the Heading component to the root element
rootElement.render(<Heading/>)
