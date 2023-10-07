import React, { useEffect } from "react";
import { Header, List, MainButton, View } from "ui/components";
import styled from "styled-components";
import { flex } from "ui/css";
import { justifyBetween } from "ui/css/justify";
import { PrimaryTitle } from "ui/components";
import { Link, useParams } from "react-router-dom";
import basicWorkout from "../../workouts/basicWorkout";
import { useStyle, useWorkout } from "hooks";
import { useSpeech } from "../../providers/SpeechProvider/SpeechProvider";
import { ArrowRightOutlined } from "ui/icons";
import exercises from "../../workouts/exercises";
import { useExercises } from "hooks/useExercises";

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
  const workout = useWorkout(id);
  const [speech, speak] = useSpeech();

  const exercises = useExercises(workout.exerciseIds);

  useEffect(() => {
    // all medias will be cached as soon as the user clicks on a workout
    let mediaPromises = [];
    exercises.forEach(({ media }) => {
      mediaPromises = [...mediaPromises, ...media.map(({ src }) => fetch(src))];
    });
  }, [exercises]);

  const style = useStyle(
    {
      display: "block",
      padding: "1.1rem 0",
    },
    []
  );

  return (
    <View data-testid="ExerciseList">
      <Header>
        <PrimaryTitle>{workout.name}</PrimaryTitle>
      </Header>
      <Link to={`/countdown?time=2&workout=${id}`}>
        <StartButton>Start</StartButton>
      </Link>
      <List>
        {exercises.map(({ id, duration, name }) => {
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
  );
};

export default ExerciseList;
