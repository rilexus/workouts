import exercises from "../../workouts/exercises";
import { usePromise } from "hooks/usePromise";

const useExercises = (exerciseIds) => {
  return usePromise(
    async () => exerciseIds.map((id) => exercises[id]),
    [exerciseIds]
  );
};

export { useExercises };
