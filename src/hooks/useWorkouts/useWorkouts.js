import workouts from "../../workouts";

const useWorkouts = () => {
  return { data: workouts, status: "resolved", error: null };
};

export default useWorkouts;
