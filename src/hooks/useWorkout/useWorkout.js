import workouts from "../../workouts";
import { useMemo } from "react";

const useWorkout = (id) => {
  const workout = useMemo(
    () => workouts.find((workout) => workout.id === id),
    [id]
  );
  if (!workout) {
    console.error(`${id} is not in Workouts!`);
  }
  return workout;
};

export default useWorkout;
