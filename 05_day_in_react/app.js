import React from "react";
import ReactDOM from 'reactdom';

// React component 
// Functional React component

// I know how to make react component tha's all 
const body = () => {
    return(
        <div className="Body">
            <div className="Search">
                <input type="text"></input>
            </div>
        </div>
    )
}

const Heading = () => {
    <>
    <h1>This is a React component</h1>
    <body/>
    </>
}
// Find the root element by its ID
const rootElement = document.getElementById("root");

// Render the Heading component to the root element
rootElement.render(<Heading/>)
