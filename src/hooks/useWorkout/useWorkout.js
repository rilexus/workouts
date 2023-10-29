import workouts from "../../workouts";
import { usePromise } from "hooks/usePromise";

const useWorkout = (id) => {
  return usePromise(
    async () => workouts.find((workout) => workout.id === id),
    [id]
  );
};

export default useWorkout;
