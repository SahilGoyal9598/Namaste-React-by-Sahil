// igniting our app: is the code ready to push to production

// issue with code: not an optimize code, random comments

// console logs

// bundle the files, compress, minify
// images

// processing before production: bundling, code splitting, chunking, image optimization, remove comments, minify the code, compress
// what is needed to get the app ready to production

// when we do create react app it's already ignited
// it's already production ready
// let's create our own react app
// npm: node package manager (wrong)
// npm: Doesn't have a full forms
// it manages packages behind the scenes

// npm is a standard repository for a lot of packages
// all the packages are hosted our there

// package.js is configuration for our npm
// created in json structure

// need of package.json : packages are also known as dependencies : same as packages

// version of the packages, take care in package.json

// important packages : bundler

// bundler: whole code needs to be bundled together, (compress, minify)

// webpack, parcel, vite

// package app to shift for the production
// create raact app uses webpack behind the scenes

// which bundlers: all do the same thing but in a different way

// parcel is easy to configure

// "https://medium.com/trendyol-tech/vite-webpack-killer-or-something-else-87019b4aeca2#:~:text=Vite%20is%20a%20relatively%20new,bundling%20all%20the%20files%20together."

//  npm install -D parcel:
// two types of dependencies
// 1. dev dependencies : it is generally required in a development environment phase
// 2. normal dependencies: used in production

// parcel will give muscles to the our app
// "parcel": "^2.9.3" "^" this is caret
// caret and tilde in package.json

// caret: "^2.9.3" version 2.9.3, suppose tomorrow new version comes up parcel will automatically will get updated to a new update
// tilde: "~2.9.3" version 2.9.3, suppose major version comes up then tilde will install the major version

// if you want exact version in package.json also then remove both caret and tilda

// always it is safe to put caret to update the minor verison not the major version, this can change the syntax of the library

// what is package-lock.json and why it is created after the parcel installed

// package.json : configuration for npm and it keeps track of what verison has been used to develop the app
// if there is caret update minor update
// package.json will stay "^2.9.3" like this
// it will keep a approx version

// package-lock.json: keep a track of exact version that is been installed
// it will show "^2.9.5" if there is a new updated version
// locks the version and keeps the record of exact dependency

// integrity: it is hash, SHA512 hash, hash is present because it keeps a hash to verify whatever is there in my machine is the same verison which is being deployed on the production
// its working on my local but breaks in the production

// node modules is being created (set of folders): contains all the codes that we fetched from npm

// when we installed parcel it went to npm and fetched all the code related to the parcel
// node modules is like a database that contains all the code related to the parcel
// it fetches all the code of all the dependencies into our system

// transitive dependencies:  what are other folders apart from parcel: parcel as a project has its own dependencies and those dependencies can have their own dependencies and so on

// how would npm know about parcel and its dependencies
// every dependency has its package.json and package-lock.json
// every dependency has its own version and depedencies

// should I push node modules to github or production:  no
// If I have my package.json and package-lock.json then I can recreate all my node modules

// should I push my package.json and package-lock.json to github: yes
// why: Maintains a note of all the dependencies that we need
// npm install

// whatever we can regenerate don't put it in the github repository

// npx parcel index.html (npx means executing a package)
// ignition has been done
// created a server and hosted the app on to the server
// parcel goes to the source and build a development build for app then host it on the server 1234

// lets get react using npm
// cdn is not a preferred way to get the react
// its a costly operation : make a network call to unpkg.com
// version update: so everytime we need to update the link

// we need react as a normal dependency not as a development dependency

// i for install

// import React from "react"; react refers to the react inside our node module

// Browser scripts cannot have imports or exports after import: we are injecting app.js in the html file
// it treats this app.js as a normal js file but it is not
// normal js don't have imports in them
//  we need to tell browser that this is a not a normal js file by defining type as module in the script

// react-dom is coming from react-dom/client
// HMR: Hot Model Replacement

// serber built will happen at each and every save of any file and time will reduce to build the server
// parcel is caching
// where it is caching : .parcel-cache

// most expensive thing to do is image loading in the web pages: parcel will optimize the images
// minification of the files
// large scale applications require all these libraries like parcel

// differential bundling : you web app can be opened in different browser and it will give differential bundling to run on all the version of browser

// Tree shaking: from 100 functions we are only using the 20 functions then parcel will remove the rest of the 80 functions

// what makes react app faster, smoother, efficient

// more optimization on production apps

// we dont need main(app.js) in package.json when we are using parcel
// entry point in the app (we give it directly to the parcel)

// npx parcel build index.html : production ready app
// where does this build goes, parcel will build all the code (minimize and all) and create a new folder 'dist' and put all the files in this
// generates a development or production build of the code and put all this into 'dist' folder

// parcel will make 3 files : css, js, html (compressed all the code in one file)

/*

1. We will deploy all the non regenerative code to the github
2. server will get the code from github
3. Server will do its npm install and npx parcel index.html etc
4. server will have it's own dist and .parcel-cache folders
5. server will host the app to the end user

*/

// make our app compatible for older versions of browser
// we will use browserslist
// browserlist is an npm package

/*

"browsersList": [
    "last 2 chrome version",
    "last 2 firefox version"
  ]

  it will 100 % work in last 2 versions on the given browser
  it may or may not work in other browsers

  https://browserslist.dev/?q=bGFzdCAxMCB2ZXJzaW9u
  it will add extra code to run on the all the browsers

  We can give country specific command (run for 99% users in India)
  parcel takes care of this with browserslist
  
*/
