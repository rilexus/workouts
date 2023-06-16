import React from "react";
import { Link } from "react-router-dom";
import { useWorkouts } from "hooks/useWorkouts";
import { List, View } from "ui/components";

const WorkoutsList = () => {
  const workouts = useWorkouts();

  return (
    <View>
      <h1>Workouts</h1>
      <List>
        {workouts.map(({ name, id }) => {
          return (
            <List.Element key={id} id={id}>
              <Link to={`/exercises/${id}`}>{name}</Link>
            </List.Element>
          );
        })}
      </List>
    </View>
  );
};

export default WorkoutsList;
