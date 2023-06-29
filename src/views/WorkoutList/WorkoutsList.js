import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useWorkouts } from "hooks/useWorkouts";
import { PrimaryTitle, Header, List, View } from "ui/components";
import { useSpeech } from "../../providers/SpeechProvider/SpeechProvider";

const WorkoutsList = () => {
  const workouts = useWorkouts();
  const [speech, speak] = useSpeech();

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
              <Link
                to={`/exercises/${id}`}
                style={{
                  display: "block",
                }}
              >
                {name}
              </Link>
            </List.Element>
          );
        })}
      </List>
    </View>
  );
};

export default WorkoutsList;
