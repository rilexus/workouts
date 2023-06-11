import React from "react";
import workouts from "../../workouts";
import { Link } from "react-router-dom";
import { useWorkouts } from "hooks/useWorkouts";

const WorkoutsList = () => {
  const workouts = useWorkouts();

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.map(({ name, id }) => {
          return (
            <li id={id}>
              <Link to={`/exercises/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutsList;
