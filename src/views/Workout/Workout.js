import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountdown, useExercise, useWorkout } from "hooks";
import { COUNTDOWN_STATE } from "hooks/useCountdown";
import styled from "styled-components";
import elasticFontSize from "ui/css/utils/elasticFontSize";
import {
  Center,
  PauseButton,
  StopButton,
  Countdown,
  PlayButton,
  Header,
  PrimaryTitle,
  BackButton,
} from "ui/components";
import { useSpeech } from "../../providers/SpeechProvider/SpeechProvider";
import exercises from "../../workouts/exercises";
import { STATUS } from "hooks/usePromise/usePromise";

const ExerciseName = styled.h2`
  ${elasticFontSize(30, 70, 300, 1000)}
`;

const BGGif = styled.img`
  width: 100vw;
  z-index: -10;
  position: absolute;
  inset: 0;
  opacity: 0.3;
`;

const View = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Execute = ({ workout }) => {
  const navigate = useNavigate();
  const id = workout.id;
  const [speak] = useSpeech();

  const [exerciseIndex, setExerciseIndex] = useState(0);

  const exercises = workout?.exercises;
  const currentExercise = exercises?.[exerciseIndex];

  const duration = currentExercise?.duration;

  const exercisesCount = exercises?.length;

  const [countdown, { pause, reset, stop, state, start }] = useCountdown({
    sec: duration,
  });

  useEffect(() => {
    if (countdown) {
      speak(countdown);
    }
  }, [countdown]);

  const handleStop = useCallback(() => {
    navigate(`/exercises/${id}`);
  }, [navigate, id]);

  const nextExercise = useCallback(() => {
    if (exercisesCount - 1 > exerciseIndex) {
      setExerciseIndex((i) => i + 1);
    } else if (exercisesCount - 1 === exerciseIndex) {
      handleStop();
    }
  }, [exercisesCount, exerciseIndex, handleStop]);

  useEffect(() => {
    if (state === "EXPIRED") {
      nextExercise();
      reset(duration);
      start();
    }
  }, [countdown, state, nextExercise]);

  console.log({ currentExercise });

  return (
    <View>
      <Header>
        <Center>
          <BackButton to={""} />
          <PrimaryTitle>{workout.name}</PrimaryTitle>
        </Center>
      </Header>
      <Center>
        <ExerciseName>{currentExercise.name}</ExerciseName>
      </Center>

      <BGGif src={currentExercise.media[0].src} alt="" />
      <Countdown
        style={{
          textAlign: "center",
          zIndex: 100,
        }}
      >
        {countdown}
      </Countdown>
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          width: "100vw",
          left: 0,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {state === COUNTDOWN_STATE.PAUSED ? (
          <PlayButton
            onClick={() => {
              start();
            }}
          />
        ) : null}
        {state === COUNTDOWN_STATE.RUNNING ? (
          <PauseButton
            onClick={() => {
              pause();
            }}
          />
        ) : null}
        <StopButton onClick={handleStop} />
      </div>
    </View>
  );
};

const Workout = () => {
  let { id } = useParams();

  const { data: workout, status: workoutStatus } = useWorkout(id);

  return workoutStatus === STATUS.RESOLVED ? (
    <Execute workout={workout} />
  ) : null;
};

export default Workout;
