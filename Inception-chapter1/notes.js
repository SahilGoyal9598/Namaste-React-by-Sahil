// VS code uses EMMET : it generates code for you

// append child: is method

// browser don't know what is react

// get react into our project

// 1. search cdn react on google

// what is cdn???: content delivery networks
// cdn is place the react library is hosted

// after putting in the reatc cdn link our project has react inside it

// react is the JS library (built on top of JS)

// react is written by facebook developers

// when we are importing cdn links then we are importing the react code (JS code) to our system

// There are 2 CDN files (links):
// 1st is the core of the react library (https://unpkg.com/react@18/umd/react.development.js)
//

// 2nd is the react-dom library useful for dom operations, bridge bewteen browser and react (https://unpkg.com/react-dom@18/umd/react-dom.development.js)
// dom: document object model

// react native works on mobile

/* 
 <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Namaste React";

      const root = document.getElementById("root");
      root.appendChild(heading);
</script>

*/

// react.createElement is the core of react
// and when we want to manipulate the DOM structure then we need to use React Dom

// root = ReactDOM.createRoot(document.getElementById("root)
// root is the place where all the react code will run
// everything will be rendered in the root

// React is build on the philosophy that we want to manipulate the DOM structure our DOM using JavaScript

// Most costly operation on the webpage is when DOM nodes needs to be manipulated

// DOM trees getting change: Putting or removing the DOM trees
// DO it everything using JavaScript (DOM manipulation)

// will the order of file matters in case of importing react files and importing js files to the script

// order will always in sequence

// difference between React.development and React.production links
// can I use React.Production here

/*
<div id="root">
      <h1>Namaste React</h1>
    </div>


    Namaste React: will be replaced by parent or more specifically: root.render(parent);


    when the browser is reading our HTML file it will print the "Namaste React" but when it reaches the react script it will replace the passed tagged with root.render(parent) or React program

*/

// difference between library and framework
// library: React: can be applied to a small portion of the page, react can work with different frameworks
// only work in footer, or sidebar whatever the root

// framework: all laods of things, it requires the developer to create an app only using this framework

// crossorigin: The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
// CORS: Cross Origin Resource Sharing
// ooposite of cross origin is the same origin requests. Web page can only interact with other documents that are also on the same server

// difference betwee react.development.js and react.production.js : webpacks, module bundler
