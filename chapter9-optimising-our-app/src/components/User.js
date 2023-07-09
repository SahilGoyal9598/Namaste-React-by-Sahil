import { useState, useEffect } from "react";

import useUserData from "../utils/useUserData";

const User = () => {
  const userInfo = useUserData();

  console.log(useUserData());

  const [click, setClick] = useState(0);

  const [click1, setClick1] = useState(1);

  const { name, location, bio } = userInfo;

  useEffect(() => {
    console.log(click1);
  }, [click1]);

  useEffect(() => {
    fetchUser();
  }, [click]);

  return (
    <div className="user-card">
      <h1>Count: {click}</h1>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        Increase
      </button>

      <h1>Count: {click1}</h1>
      <button
        onClick={() => {
          setClick1(click1 - 1);
        }}
      >
        Decrease
      </button>

      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @sahilgoyal9598</h4>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default User;
