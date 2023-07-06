// Monolith and microservices architectures

// the world is moving towards microservices architectures

// traditionally apps were developed using monolithic architectures

// a big project

// APIs, UI code, Authentication, Database, sending notifications

// lending cart : java project
// JSP pages were written in the same project

// in the same project: backend, frontend, APIs, authentication, connection to bd, notifications: were all in the same service

// whole project: suppose I have to change the color of a button, then compile the whole project again and then build, deploy

// the world is moving towards microservices architectures architectures

////////////////////////////////////////////////////////////////

// microservices architecture

// different services for different jobs

// 1. backend services
// 2. UI services
// 3. Authentication services
// 4. Database services
// 5. Notification services
// 6. Email notification services

// combine together to forms a big app
// uber follows microservices architectures

// they talk to each other

// separation of concerns : single responsibility principle

// each service has its own job

// everybody used to work on same project in monolith architecture

// now in microservices each team has its own project and they have their own deplyoment cycle

// how do these services interact with each other

// connection ==> UI to backend, backend services to db, backend services to authentication, backend services to notification

// how these are deployed

// our project namaste react is UI microservices
// written in react
// UI in react, backend in java, DB in python, SMS in golang

// its foolish to ask which language is used at uber
// they use mutiple languages to built services (depending on service)

// all depends on use case
// what text app is suitable for a service

////////////////////////////////////////////////////////////////

// connection

// Our project namaste react is deployed on 1234 port
// all other services run on their own port

// port
// 1234 UI
// 1000 backend
// 3000 SMS

// all the ports can be mapped to domain name

// backend is mapped to /api (namaste-dev.com/api) then all these APIs are deployed on the same url
// backend is mapped to /sms
// UI is mapped to / it redirects to port 1234

// how do these services interact: they make call to the URLs

// UI when connecting to backend they will call to /api or will call to a different port

// how a react app make connections to outside of this world (microservices)

// backend API call

////////////////////////////////////////////////////////////////

// ways UI calls backend to fetch data

// 2 approaches

// 1. when our app loads : just make an API call to fetch data

// app loads => make an API call => render UI

// suppose API call takes 5000 Miliseconds
// page will wait for 5000 miliseconds, Wait for UI and then render the UIs

// 2.

// page loods => render UI => APIs call => populate or re-render the UI or application

// in react we will always be using the 2nd approach
// this is better approach
// better UX
// 1st approach : for 500 miliseconds page is blank and after 500 miliseconds eveyrthing is there, so this is a poor user experience
// 2nd approach : load the page then render whatever we can, see something on the website and slowly our page will load
// bette user experience

// Rendering twice: doens't matter, react has best render mechanism, very fast, dont bother about how many times we are rendering

// fetch will return a promise
// async and await
// make the function async and await the data to come
// access to the fetch at "API" from origin "local host" has been blocked by CORS policy : no 'access-control-allow-origin' header is present on the requesting resource
// CORS policy : who is blocking us (our browser blocks us to call API from one origin to another origin)
// origin mixmatch

// two arguments : callback, dependency array
// when will this useEffect function callback will be called
// after your component renders
// after the boy component loads it will render the component and as soon as the render cycle is finished it will call the callback function passed inside useEffect
// when we want to do anything after render cycle is finished then use useEffect

// it will save the callback function to call it after the component has been rendered
// how to bypass this CORS

// is showing a spinner is a good thing : no

////////////////////////////////

// shimmer UI: remesbles the page's actual UI so that viewer can see when the web app will load
// loading a fake page until we will get the data from the API

// app loads => render it with shimmer UI =>  API call => re rendering

// why we use useState
// why normal variable will not work
// what why when and how is really important

// login and logout

/////////////////////////////////////////

// search functionality

// filter the restaurant cards and update the UI
// search text: get the value in the search field and bind this value to the local state variable of react
// why input box is not working : why???
// we have bind the value of the input box to the local state variable and currently its empty
// whenever we change the local state variable react re renderd the component
// whenever state variable updates react triggers a reconciliation cycle or re renders the component

// const filteredList = listOfRestaurants.filter(
//   (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
// );

// to find exact search

// const filteredRestaurant = listOfRestaurants.filter(
//   (res) => res.data.name === searchText
// );

// conditional rendering
// write the shimmer component in the main return using ternary operator here

// should we put all the data or json

// use effect hook

// if we call this useState, it will give us a state variable and we store it this in a variable in an array
