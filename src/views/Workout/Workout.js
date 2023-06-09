import React from "react";
import { useParams } from "react-router-dom";
import { useWorkout } from "hooks";
import styled from "styled-components";
import elasticFontSize from "ui/css/utils/elasticFontSize";

const ExerciseName = styled.h2`
  ${elasticFontSize(30, 70, 300, 1000)}
`;

const Workout = () => {
  let { id } = useParams();
  const workout = useWorkout(id);

  console.log(workout);
  const currentExercise = workout.exercises[0];

  return (
    <div>
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
    </div>
  );
};

export default Workout;
