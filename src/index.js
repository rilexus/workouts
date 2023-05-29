import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from "styled-components";
import {GlobalStyle} from "ui/css";
import {ExerciseList} from "./views";

const Div = styled.div``;

const Root = () => {
  return <Div>
    <GlobalStyle/>
    <ExerciseList/>

  </Div>;
};


(async () => {
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<Root />);
})();

