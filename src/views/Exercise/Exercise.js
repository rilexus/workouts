import React from "react";
import { useParams } from "react-router-dom";
import { Header, PrimaryTitle, View } from "ui/components";

const Exercise = () => {
  const { id } = useParams();
  return (
    <View>
      <Header>
        <PrimaryTitle>Workouts</PrimaryTitle>
      </Header>
      <div>Exercise</div>
    </View>
  );
};

export default Exercise;
