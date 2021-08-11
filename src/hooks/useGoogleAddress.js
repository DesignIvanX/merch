import { useState, useEffect } from "react";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=31dd92ebf370fbfce7b89520b66b1d9d&query=${address}`;
  useEffect(() => {
    fetch(API)
      .then((resolve) => resolve.json())
      .then((data) => {
        setMap(data.data[0]);
      });
  }, []);
  return map;
};

export default useGoogleAddress;
