import { Link } from "react-router-dom";
import React from "react";

const WorkoutLink = ({ id, ...rest }) => {
  return <Link {...rest} to={`workout/${id}`} />;
};

export { WorkoutLink };
