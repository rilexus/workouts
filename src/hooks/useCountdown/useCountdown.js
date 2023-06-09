import { useEffect, useRef, useState } from "react";

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

const useCountdown = ({ sec, onDone, immediate = true }) => {
  const [state, setState] = useState("IDLE");

  const [countdown, setCountdown] = useState(sec);

  const pause = () => {
    setState("PAUSED");
  };

  const start = () => {
    setState("RUNNING");
  };

  const reset = () => {
    setState("IDLE");
    setCountdown(sec);
  };

  const decrement = () => {
    if (state === "RUNNING" && countdown > 0) {
      setCountdown((c) => c - 1);
    }
  };

  useInterval(decrement, 1000);

  useEffect(() => {
    if (immediate) {
      start();
    }
  }, [immediate]);

  useEffect(() => {
    if (countdown === 0) {
      onDone ? onDone() : null;
    }
  }, [countdown]);

  return [countdown, { pause, reset, start }];
};

export default useCountdown;
