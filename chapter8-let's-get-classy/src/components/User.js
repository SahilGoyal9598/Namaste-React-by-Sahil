import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [click, setClick] = useState(0);

  const [click1, setClick1] = useState(1);

  const { name, location, bio } = userInfo;

  useEffect(() => {
    console.log(click1);
  }, [click1]);

  useEffect(() => {
    fetchUser();
  }, [click]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval is running");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("interval is stopped");
    };
  });

  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/SahilGoyal9598");

    const json = await data.json();
    setUserInfo(json);

    console.log(json);
  };

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
      <text>Bio: {bio}</text>
    </div>
  );
};

export default User;
