import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offine", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return a boolean value
  return onlineStatus;
};

export default useOnlineStatus;
