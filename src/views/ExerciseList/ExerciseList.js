import React from "react";
import { MainButton } from "ui/components/buttons";
import styled from "styled-components";
import { flex } from "ui/css";
import { justifyBetween } from "ui/css/justify";
import { PrimaryTitle } from "ui/components";

const exercises = [
  {
    id: "Some1_1",
    title: "Jumping Jacks",
    duration: 1, // in sec
  },
  {
    id: "Some2_2",
    title: "Wall Sit",
    duration: 1,
  },
  {
    id: "Some3_3",
    title: "Push-Ups",
    duration: 1000,
  },
  {
    id: "Some3_3",
    title: "Abdominal Crunch",
    duration: 1,
  },
  {
    id: "Some3_4",
    title: "Chair Step-Ups",
    duration: 1,
  },
  {
    id: "Some3_5",
    title: "Squads",
    duration: 1,
  },
  {
    id: "Some3_6",
    title: "Chair Triceps Dips",
    duration: 1,
  },
  {
    id: "Some3_7",
    title: "Plank",
    duration: 1,
  },
  {
    id: "Some3_8",
    title: "High Knees",
    duration: 1,
  },
  {
    id: "Some3_9",
    title: "Lunges",
    duration: 1,
  },
  {
    id: "Some3_10",
    title: "Push-Ups (with Rotation)",
    duration: 1,
  },
  {
    id: "Some3_11",
    title: "Side Planks",
    duration: 1,
  },
];

const Li = styled.li`
  padding: 1rem 1rem;
  ${flex};
  ${justifyBetween};
`;

const ExerciseList = () => {
  return (
    <div>
      <PrimaryTitle>Exercises</PrimaryTitle>
      <ul>
        {exercises.map(({ id, duration, title }) => {
          return (
            <Li id={id}>
              <div>{title}</div>
              <div>{duration}</div>
            </Li>
          );
        })}
      </ul>
      <MainButton>Start</MainButton>
    </div>
  );
};

export default ExerciseList;
