// how is useEffect is called: using two arguments [callback, dependency array]
// useEffect is called everytime the component renders

// dependency array will changes the behavior of the render
// dependency array is not mandatory
// if we call useEffect without a dependency array it will render everytime the component is rendered

// 1. if no dependency array then useEffect will render everytime the component is rendered

// 2. if dependency array is empty useEffect will render only once initially (just omce when the component is rendered for the 1st time)

// basic nature of useEffect is to call everytime the component is rendered

// 3. if there is something inside the dependency array : it will only be called when the dependency changes

////////////////////////////////
// it will update everytime the component is rendered
//  useEffect(() => {
//     console.log("useEffect");
//   });

////////////////////////////////

// it will update only initially once
//   useEffect(() => {
//     console.log("useEffect");
//   }, []);

////////////////////////////////

// It will update only when the dependency array is changed
//   useEffect(() => {
//     console.log("useEffect");
//   }, [btnNameReact]);

///////////////////////////////////////////////////////////////////

// useState

// 1. Never create useState outside of the component
// 2. Call these hooks on the top of the component to avoid inconsistency in the code
// 3. Never create useState inside if else or a condition (although js allows it), but try to use what react says
// 4. Never create useState inside forloop
// 5. Never create useState inside function

////////////////////////////////////////////////////////////////////////

// React router dom

// routing configuration

// information that will tell browserRouter what will happen on the router

// 1. create configuration : import createBrowserRouter
// 2. createBrowserRouter will take in configuration : list or array of objects
// 3. Each and every objects define a path and what should happen on that path
// 4. provide this configuration : to render it
// 5. import RouterProvider : provide router configuration to our app

// http://localhost:1234/sahil
// Unexpected Application Error!
// 404 Not Found
//💿 Hey developer 👋

// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

// rafce :  to create a dummy component

// function starting with use is a hook
// for error handlig: import { useRouteError } from "react-router-dom"

// outlet will be filled with component according to the path

// when we are using react and we want to do the routing to some other page, never ever use the react
// why : this will refresh the whole page
// We don't want to refresh the whole page : we can navigate to a different page

// React applications are know as single page applications

// when we go to a new route it just changes the components, not refresh the full page
// two types of routing : client side and server side

// # 2 types of Routing in we apps

// 1. Client side Routing: We are not making any network calls when we are moving to a new page, all the components are already into our app, when we go to route it just loads the components (only network call it will make when we are calling an API)
// single page aplication : client side routing, just components are getting changed, not the whole page
// 2. Server side Routing: if we have html page for every route then it reloads the whole page, sends network call, fetches the HTML and renders in onto the webpage

//////////////////////////////////

// dynamic routes

//
