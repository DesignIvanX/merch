import { useState, useEffect } from "react";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});

  useEffect(() => {
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=31dd92ebf370fbfce7b89520b66b1d9d&query=${address}`
    )
      .then((resolve) => resolve.json())
      .then((data) => setMap(data.data[0]));
  }, [address]);
  return map;
};

export default useGoogleAddress;
