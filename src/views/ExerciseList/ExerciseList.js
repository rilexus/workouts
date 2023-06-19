import React, { useEffect } from "react";
import { Header, List, MainButton, View } from "ui/components";
import styled from "styled-components";
import { flex } from "ui/css";
import { justifyBetween } from "ui/css/justify";
import { PrimaryTitle } from "ui/components";
import { Link, useParams } from "react-router-dom";
import basicWorkout from "../../workouts/basicWorkout";
import { useWorkout } from "hooks";

const Li = styled(List.Element)`
  padding: 1rem 1rem;
  ${flex};
  ${justifyBetween};
`;

const StartButton = styled(MainButton)`
  width: 100%;
`;

const ExerciseList = () => {
  const { id } = useParams();
  const workout = useWorkout(id);

  useEffect(() => {
    // all medias will be cached as soon as the user clicks on a workout
    let mediaPromises = [];
    workout.exercises.forEach(({ media }) => {
      mediaPromises = media.map(({ src }) => fetch(src));
    });
  }, [workout]);

  return (
    <View data-testid="ExerciseList">
      <Header>
        <PrimaryTitle>{workout.name}</PrimaryTitle>
      </Header>
      <Link to={`/countdown?time=2&workout=${id}`}>
        <StartButton>Start</StartButton>
      </Link>
      <List>
        {basicWorkout.exercises.map(({ id, duration, name }) => {
          return (
            <Li id={name} key={name}>
              <div>{name}</div>
              <div
                style={{
                  color: "gray",
                }}
              >
                <span>{duration} </span>
                <span>sec</span>
              </div>
            </Li>
          );
        })}
      </List>
    </View>
  );
};

export default ExerciseList;
