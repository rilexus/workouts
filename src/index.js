import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { GlobalStyle } from "ui/css";
import { ExerciseList } from "./views";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Countdown from "views/Countdown/Countdown";
import { Workout, WorkoutsList } from "views";
import { Theme } from "ui/components";
import { SpeechProvider } from "./providers/SpeechProvider/SpeechProvider";
import { Exercise } from "views/Exercise";
import { LinkProvider } from "./providers/LinkProvider";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const NoMatch = () => {
  return <div>404</div>;
};

const Root = () => {
  return (
    <LinkProvider value={fetch}>
      <GlobalStyle />
      <Theme>
        <SpeechProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<WorkoutsList />} />
                <Route path="countdown" element={<Countdown />} />
                <Route path="countdown" element={<Countdown />} />
                <Route path="exercises">
                  <Route path={":id"} element={<ExerciseList />} />
                </Route>
                <Route path="exercise">
                  <Route path={":id"} element={<Exercise />} />
                </Route>
                <Route path="workout">
                  <Route path=":id" element={<Workout />} />
                </Route>
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </SpeechProvider>
      </Theme>
    </LinkProvider>
  );
};

const sleep = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

(async () => {
  // prepare data here
  await sleep(1000);
  return {};
})().then((appData) => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<Root />);
});
const registerSW = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
};

registerSW();
