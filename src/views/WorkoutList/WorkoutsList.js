import React from "react";
import { Link } from "react-router-dom";
import { useWorkouts } from "hooks/useWorkouts";
import { PrimaryTitle, Header, List, View } from "ui/components";

const WorkoutsList = () => {
  const workouts = useWorkouts();

  return (
    <View>
      <Header>
        <PrimaryTitle>Workouts</PrimaryTitle>
      </Header>
      <List>
        {workouts.map(({ name, id }) => {
          return (
            <List.Element key={id} id={id}>
              <Link
                to={`/exercises/${id}`}
                style={{
                  display: "block",
                }}
              >
                {name}
              </Link>
            </List.Element>
          );
        })}
      </List>
    </View>
  );
};

export default WorkoutsList;
