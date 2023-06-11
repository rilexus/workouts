import workouts from "../../workouts";

const useWorkout = (id) => {
  const workout = workouts.find((workout) => workout.id === id);
  if (!workout) {
    console.error(`${id} is not in Workouts!`);
  }
  return workout;
};

export default useWorkout;
