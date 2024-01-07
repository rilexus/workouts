import React from "react";
import { useParams } from "react-router-dom";
import { BackButton, Header, PrimaryTitle, View } from "ui/components";

const Exercise = () => {
  const { id } = useParams();
  return (
    <View>
      <Header>
        <BackButton to={"../"} />
        <PrimaryTitle>Exercise</PrimaryTitle>
      </Header>
      <div>Exercise</div>
    </View>
  );
};

export default Exercise;
