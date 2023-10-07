import exercises from "../../workouts/exercises";

const useExercise = (id) => {
  return exercises[id];
};

export { useExercise };
