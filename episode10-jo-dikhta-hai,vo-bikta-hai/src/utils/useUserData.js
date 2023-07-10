import { useEffect, useState } from "react";
import { USER_API } from "../utils/constants";

const useUserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await fetch(USER_API);
    const json = await data.json();
    setUserData(json);
  };

  return userData;
};

export default useUserData;
