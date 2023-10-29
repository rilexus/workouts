import React, { useEffect } from "react";
import { Header, List, MainButton, View } from "ui/components";
import styled from "styled-components";
import { PrimaryTitle } from "ui/components";
import { Link, useParams } from "react-router-dom";
import { useStyle, useWorkout } from "hooks";
import { ArrowRightOutlined } from "ui/icons";
import { useExercises } from "hooks/useExercises";
import { STATUS } from "hooks/usePromise/usePromise";
import { useLink } from "../../providers/LinkProvider";

const Li = styled(List.Element)`
  padding: 0;
`;

const StartButton = styled(MainButton)`
  width: 100%;
`;

const ListElement = ({ name, duration }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>{name}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "gray",
        }}
      >
        <div
          style={{
            marginRight: ".3rem",
          }}
        >
          <span>{duration} </span>
          <span>sec</span>
        </div>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

const ExerciseList = () => {
  const { id } = useParams();
  const { data: workout, status } = useWorkout(id);
  const { data: exercises, status: exercisesStatus } = useExercises(
    workout?.exercises
  );

  const fetch = useLink();

  useEffect(() => {
    // all medias will be cached as soon as the user clicks on a workout
    if (exercises) {
      const mediaPromises = exercises.reduce((acc, { media }) => {
        return [...acc, , ...media.map(({ src }) => fetch(src))];
      }, []);
    }
  }, [exercises]);

  console.log({ exercises });

  const style = useStyle(
    {
      display: "block",
      padding: "1.1rem 0",
    },
    []
  );

  return (
    status === STATUS.RESOLVED && (
      <View data-testid="ExerciseList">
        <Header>
          <PrimaryTitle>{workout.name}</PrimaryTitle>
        </Header>
        <Link to={`/countdown?time=2&workout=${id}`}>
          <StartButton>Start</StartButton>
        </Link>
        <List>
          {exercisesStatus === STATUS.RESOLVED &&
            exercises.map(({ id, duration, name }) => {
              return (
                <Li id={name} key={name}>
                  <Link to={`/exercise/${id}`} style={style}>
                    <ListElement name={name} duration={duration} />
                  </Link>
                </Li>
              );
            })}
        </List>
      </View>
    )
  );
};

export default ExerciseList;
