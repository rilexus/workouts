import React from "react";
import { MainButton } from "ui/components";
import styled from "styled-components";
import { flex } from "ui/css";
import { justifyBetween } from "ui/css/justify";
import { PrimaryTitle } from "ui/components";
import { Link, useParams } from "react-router-dom";
import basicWorkout from "../../workouts/basicWorkout";
import { useWorkout } from "hooks";

const Li = styled.li`
  padding: 1rem 1rem;
  ${flex};
  ${justifyBetween};
`;

const ExerciseList = () => {
  const { id } = useParams();
  const workout = useWorkout(id);

  console.log(id, workout);

  return (
    <div data-testid="ExerciseList">
      <PrimaryTitle>Basic Workout</PrimaryTitle>
      <ul>
        {basicWorkout.exercises.map(({ id, duration, name }) => {
          return (
            <Li id={name} key={name}>
              <div>{name}</div>
              <div>{duration}</div>
            </Li>
          );
        })}
      </ul>
      <Link to={"/countdown?time=2&workout=basic"}>
        <MainButton>Start</MainButton>
      </Link>
      <Link to={`/workout/${workout.id}`}>
        <MainButton>Workout</MainButton>
      </Link>
    </div>
  );
};

export default ExerciseList;
