import { useEffect, useRef } from "react";

const useInterval = (callback, ms) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(callback, ms);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [callback]);

  return intervalRef.current;
};

export default useInterval;
