import { useEffect, useState } from "react";

const STATUS = {
  PENDING: "pending",
  RESOLVED: "resolved",
  ERROR: "error",
};

const usePromise = (resolver, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.PENDING);

  useEffect(() => {
    resolver()
      .then((res) => {
        setStatus(STATUS.RESOLVED);
        setData(res);
      })
      .catch((e) => {
        setStatus(STATUS.ERROR);
        setError(e);
      });
  }, deps);

  return { data, status, error };
};

export { STATUS };
export default usePromise;
