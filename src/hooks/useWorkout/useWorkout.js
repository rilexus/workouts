import workouts from "../../workouts";

const useWorkout = (id) => {
  if (!(id in workouts)) {
    console.error(`${id} is not in Workouts!`);
  }
  return workouts[id];
};

export default useWorkout;
