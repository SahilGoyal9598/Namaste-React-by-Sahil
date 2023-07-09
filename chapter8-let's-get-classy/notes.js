// class based component
// a lot of interviewers are asking them
// understanding of react will improve
// react lifecycle works

// import React, { Component } from'react';
// import ReactDOM from'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';

// extends React.Component is way to tell React that this is a class based component
// functional component returns some piece of JSX
// Class based component is a class and will have render which returns come piece of JSX
// why we write super(props)

// what us react render lifecycle
// class loads => constructor is called => render is called =>

// componentDidMount is used to make an API call

// why it is made inside componentDidMount
// remember we do the useEffect in the functional component: useEffect runs after the component is rendered
// We don't want to wait for data , so we 1st render then make API call and fill in the data

// hers componentDidMount comes into picture

// parent constructor => Parent render => Child1 constructor => Child1 render => Child2 constructor => Child2 render => child1 componentDidMount => child2 componentDidMount => parent componentDidMount

// Why both the child1 and child2 componentdidMount was called later

// react lifecycle method diagram
