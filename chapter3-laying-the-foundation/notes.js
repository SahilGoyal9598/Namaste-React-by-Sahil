// npx : we are executing as npm command with a library and a source file
// we can create scripts in package.json to start our project in dev mode as well as production mode
// new project: just go to package.json and see what's there in the script

// npm start = npm run start

// React Element
// dom elements: html tags and all

// Not Rendered is a common practice to highlight bugs in react code

/*
when we render react element to the DOM then it becomes HTML
when dealing with browser we have separate package as ReactDOM

to deal with clumpsy code JSX is there (JS syntax: easier to create react elements)
JSX is not part of react
react tries to merge html and javascript so that we can do the same thing together
JSX is a comvention where we merge HTML and javascript

JSX is not HTML inside JavaScript, it's HTML like syntax or more of XML like syntax


const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

jsxHeading is the react element

is JSX is valid javascript: it is not a valid javascript in some sense
it is not pure javascript
javascript is doesn't come with built-in JSX
JS ensgine will not understand JSX
JS engine understand ECMA script (pure javascript)
how this code is working then: Parcel is here my friend
code is transpiled by parcel and then sent to browser or specifically js engine
parcel has dependency called: Babel

Babel: JS compiler or transpiler
JSX comversion is done by it
it is not created by facebook

React.createElement => React Element => JS object => rendered HTML element

JSX => Babel transpiles => React.createElement => React Element => JS object => rendered HTML element

ttps://babeljs.io/

Babel transpile ES6 code to older versions of browser campatible JS
Babel Abstract Syntax Tree Creation: tokenization and transpilation  

JSX camel case

JSX when writing in multiple lines it needs to be wrapped up insie parenthesis


React Component: Everything is a component in react (button, header, footer, card, search, input)

but what is a component in react:two types
1. Class based component - Old way is writing the code, hardly anyone uses
2. Functional component - new way is writing the code


React functional component : noraml js function, which return some JSX element, or a react element

const fn = () => true;

const fn1 = () => {
  return true;
};



render a component to the page: root.render(<HeadingComponent />);, Babel understands it like this

conponent composition: one component in another component


{} any js code can be executed using {} is JSX

even console.log will work

 what if this API sends a malicious data (hacking or something)
 It might be a bad API
 hackers sends some code to steal data of the users when they run our program
 Cross side scripting : attackers will send some data and can steal cookies, session storage, local storage, etc
 JSX takes care of these attackers
 Whenever any data is wrapped inside the curly brackets, JSX will sanitise the data and then send it to browser

 <Title /> or <Title></Title> or Title() both ways we can run a component

 JSX expression must only have one parent element
 Tree can have only one root
 We have have div inside div but on the top level we have only a single element

 solution to this is react fragment, it will be just one parent of the react component
 it behaves like an empty tag

 to solve further let's create a empty tag <>

*/
