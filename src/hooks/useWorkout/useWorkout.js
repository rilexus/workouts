import workouts from "../../workouts";
import exercises from "../../workouts/exercises";
import { usePromise } from "hooks/usePromise";

const useWorkout = (id) => {
  return usePromise(async () => {
    const w = workouts.find((workout) => workout.id === id);
    const { exercises: exercisesIds } = w;
    return {
      ...w,
      exercises: exercisesIds.map((id) => exercises[id]),
    };
  }, [id]);
};

export default useWorkout;
