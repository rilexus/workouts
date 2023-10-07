import exercises from "../../workouts/exercises";

const useExercises = (exerciseIds) => {
  return exerciseIds.map((id) => exercises[id]);
};

export { useExercises };
