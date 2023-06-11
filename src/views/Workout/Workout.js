import React from "react";
import { useParams } from "react-router-dom";
import { useWorkout } from "hooks";
import styled from "styled-components";
import elasticFontSize from "ui/css/utils/elasticFontSize";
import { PauseButton, StopButton } from "ui/components";

const ExerciseName = styled.h2`
  ${elasticFontSize(30, 70, 300, 1000)}
`;

const BGGif = styled.img`
  width: 100vw;
  position: absolute;
  inset: 0;
  opacity: 0.3;
`;

const View = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Workout = () => {
  let { id } = useParams();
  const workout = useWorkout(id);

  console.log(workout);
  const currentExercise = workout.exercises[0];

  return (
    <View>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          {workout.name}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ExerciseName>{currentExercise.name}</ExerciseName>
      </div>
      <BGGif
        src="https://i.giphy.com/media/RgtuKqJ8rPII4qdRjp/giphy.webp"
        alt=""
      />
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          width: "100vw",
          left: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PauseButton />
        <StopButton />
      </div>
    </View>
  );
};

export default Workout;
