import { useCallback, useEffect, useRef, useState } from "react";
import { useInterval } from "hooks/useInterval";

const COUNTDOWN_STATE = {
  IDLE: "IDLE",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
  EXPIRED: "EXPIRED",
};

const useCountdown = ({ sec, onDone, immediate = true }) => {
  const [state, setState] = useState(COUNTDOWN_STATE.IDLE);

  const [countdown, setCountdown] = useState(sec);

  useEffect(() => {
    setCountdown(sec);
  }, [sec]);

  const pause = useCallback(() => {
    setState(COUNTDOWN_STATE.PAUSED);
  }, []);

  const start = useCallback(() => {
    if (countdown) {
      setState(COUNTDOWN_STATE.RUNNING);
    }
  }, [countdown]);

  const reset = useCallback(
    (sec) => {
      if (sec) {
        setState(COUNTDOWN_STATE.IDLE);
        setCountdown(sec);
      }
    },
    [sec]
  );

  const decrement = useCallback(() => {
    if (state === COUNTDOWN_STATE.RUNNING && countdown > 0) {
      setCountdown((c) => c - 1);
    }
  }, [state, countdown]);

  const handle = useCallback(() => {
    decrement();
    if (countdown === 0) {
      setState(COUNTDOWN_STATE.EXPIRED);
    }
  }, [decrement, countdown]);

  useInterval(handle, 1000);

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

  return [countdown, { pause, reset, start, state }];
};

export { COUNTDOWN_STATE };
export default useCountdown;
