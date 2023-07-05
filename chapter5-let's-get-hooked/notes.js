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

// const arr = useState(resList);

// const [listOfRestaurants, setListOfRestaur] = arr

// or

// const listOfRestaurants = arr[0]
// const setListOfRestaurants = arr[1]

// array distructuring on the fly

// create a state variable
// how we can modify the state variable
// using a function comes as the 2nd parameter of the array
// when a state variable is updated then react re-renders the component
// virtual dom, reconsiliate, react fiber
// what is react algorithm: reconciliation algorithm
// reconciliation algorithm is also know as react fiber
// let say we have 7 restaurants cards to render, react will create a virtual dom (actual dom is the html tags) (representation of actual dom)
// virtual dom is the {} do a console log of <body /> and you will see a virtual dom
// react.createElement will create a object which is virtual dom
// diff algorithm (nested object) finds out the difference between updated and previous virtual dom
// 7 cards => button clicked => new virtual dom => 3 UI elements ===> difference between old and new virtual dom (4 nodes) calculates the difference between and actually updates the actual don on every render cycle
// whenever something changes on the UI it is known as reconciliation
// 7 cards => button clicked => new virtual dom => 3 UI elements ===> difference between old and new virtual dom ====> updation of actual dom
// finding the difference between two HTML code is tough but between object is fast (js is fast)
// object will represent this dom
// after clicking the button new object is formed
// difference between two objects
// updates the dom

// https://github.com/acdlite/react-fiber-architecture

// incremental rendering: to split the rendering into chunks over multiple ways

// react is keeping an eye on the state variable
