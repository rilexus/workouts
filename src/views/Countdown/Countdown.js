import React from "react";
import { useSearchParams } from "react-router-dom";
import { useCountdown } from "../../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = Object.fromEntries(searchParams.entries());

  console.log(params);

  const [countdown, { pause, reset, start, handleDone }] = useCountdown({
    sec: Number(params.time),
    onDone: () => {
      navigate(`/workout/${params.workout}`);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "60vw",
        }}
      >
        {countdown}
      </div>
    </div>
  );
};

export default Countdown;
