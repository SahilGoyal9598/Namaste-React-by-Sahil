import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World from H1 tag"),
    React.createElement("h2", {}, "Hello World from H2 tag"),
    React.createElement("h3", {}, "Hello World from H3 tag"),
    React.createElement("h4", {}, "Hello World from H4 tag"),
    React.createElement("h5", {}, "Hello World from H5 tag"),
    React.createElement("h6", {}, "Hello World from H6 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from H1 tag"),
    React.createElement("h2", {}, "Hello World from H2 tag"),
    React.createElement("h3", {}, "Hello World from H3 tag"),
    React.createElement("h4", {}, "Hello World from H4 tag"),
    React.createElement("h5", {}, "Hello World from H5 tag"),
    React.createElement("h6", {}, "Hello World from H6 tag"),
  ]),
]);

console.log(parent); // you will see and object over console, this is the react element
// what is react element : A normal JavaScript object
// it has props: childrena and attributes we pass when creating the element

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);

// what is {} in createElement
// {} its where we give attributes to the tag
// what is attribute: giving ids to an element
// object used to give attributes to the class
// root.render: it takes the react element (JS object) and create h1 tag and put inside the id root

// most of the time HTML structure is nested
// create nested elements inside react

// React.createElement creates an object and while rendering itself to the DOM it converts to the HTML code
// more than 1 tag to the react element, pass an array to the 3rd argument
// react will through an error while creating an array of elements in React.createElement

// JSX: in the next episode
// React can written not only in JSX, but also in normal way
// JSX will help us in tags (h1/div etc)
