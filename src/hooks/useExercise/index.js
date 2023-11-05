import exercises from "../../workouts/exercises";
import { usePromise } from "hooks/usePromise";

const useExercise = (id) => {
  return usePromise(async () => exercises[id]);
};

export { useExercise };
