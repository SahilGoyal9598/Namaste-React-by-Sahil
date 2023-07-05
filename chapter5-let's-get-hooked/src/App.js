import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

/*

Everthing we can do using react can be done using html css and javascript
it makes developer experience easy and smooth

production ready large scale application

lets see the real super power of react

React hooks

lets clean out app 1st
separate files for seperate components

All the main react code to keep in the src folder
why this src : everyone uses this, source code


make a separate file for each component

https://legacy.reactjs.org/docs/faq-structure.html

extensions: jsx,js,tsx (typescript)

export and then import (component)

I we dont need to put any extensions while importing the component from a file

don't keep hard coded data on the component folder
don't keet the url also which is hardcoded

utility can be used anywhere in the app

export: default and named

use curly braces when importing named exports


react is fast in DOM manipulation
data and UI are consistent and in sync with each other

Virtual DOM , reconciliation
state variable (state of the component)

react hook : use state, create a react variable
react hook is a normal js function
it has some logic written behind it


default:react import and useState is named import
utility function

useState: used to create a state variable
it maintains the state of the component



*/
