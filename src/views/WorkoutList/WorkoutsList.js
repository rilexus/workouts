import React from "react";
import { Link } from "react-router-dom";
import { useWorkouts } from "hooks/useWorkouts";
import { PrimaryTitle, Header, List, View } from "ui/components";
import { useSpeech } from "../../providers/SpeechProvider/SpeechProvider";
import { WorkoutLink } from "../../components";

const WorkoutsList = () => {
  const { data: workouts } = useWorkouts();
  const [speak] = useSpeech();

  return (
    <View>
      <Header>
        <PrimaryTitle>Workouts</PrimaryTitle>
      </Header>
      <List>
        {workouts.map(({ name, id }) => {
          return (
            <List.Element
              key={id}
              id={id}
              onClick={() => {
                /*
                 * NOTE:
                 * init speech synthesis
                 * */
                speak("");
              }}
            >
              <WorkoutLink
                id={id}
                style={{
                  display: "block",
                }}
              >
                {name}
              </WorkoutLink>
            </List.Element>
          );
        })}
      </List>
    </View>
  );
};

export default WorkoutsList;
