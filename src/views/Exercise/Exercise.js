import React from "react";
import { useParams } from "react-router-dom";

const Exercise = () => {
  const { id } = useParams();
  return <div>Exercise</div>;
};

export default Exercise;
