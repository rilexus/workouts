import React from "react";
import {
  BackButton,
  Flex,
  Header,
  List,
  MainButton,
  View,
} from "ui/components";
import styled from "styled-components";
import { PrimaryTitle } from "ui/components";
import { Link, useParams } from "react-router-dom";
import { useStyle, useWorkout } from "hooks";
import { ArrowRightOutlined } from "ui/icons";
import { STATUS } from "hooks/usePromise/usePromise";
import { useLink } from "../../providers/LinkProvider";
import { Fixed } from "ui/components/Fixed/Fixed";
import { dropShadowMd } from "ui/css";

const Li = styled(List.Element)`
  padding: 0;
`;

const StartButton = styled(MainButton)`
  ${dropShadowMd};
  width: 100%;
  color: black;
  background-color: orange;
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
  const fetch = useLink();

  // useEffect(() => {
  //   // all medias will be cached as soon as the user clicks on a workout
  //   if (exercises) {
  //     const mediaPromises = exercises.reduce((acc, { media }) => {
  //       return [...acc, , ...media.map(({ src }) => fetch(src))];
  //     }, []);
  //   }
  // }, [exercises]);

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
          <Flex align={"center"}>
            <BackButton to={"../"} />
            <PrimaryTitle>{workout.name}</PrimaryTitle>
          </Flex>
        </Header>
        <div
          style={{
            paddingBottom: "5rem",
          }}
        >
          <List>
            {workout.exercises.map(({ id, duration, name }) => {
              return (
                <Li id={name} key={id}>
                  <Link to={`exercise/${id}`} style={style}>
                    <ListElement name={name} duration={duration} />
                  </Link>
                </Li>
              );
            })}
          </List>
        </div>
        <Fixed
          style={{
            bottom: "1.5rem",
            width: "calc(100% - 2rem)",
          }}
        >
          <Link to={`/countdown?time=2&workout=${id}`}>
            <StartButton>Start</StartButton>
          </Link>
        </Fixed>
      </View>
    )
  );
};

export default ExerciseList;
