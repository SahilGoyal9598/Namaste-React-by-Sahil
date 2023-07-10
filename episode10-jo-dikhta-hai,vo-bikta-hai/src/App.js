import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import Shimmer from "./components/Shimmer";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// chunking or code splitting or dynamic bundling, lazy laoding, on demand loading, dynamic imports
// logical separation of bundles
// A bundle should have enough code for a major feature

// MAke my trip : bundle for flights, bundle for home stays, bundle for train
// optimize load on different js files

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// lazy comes from react package

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
