import React, {
  Suspense,
  lazy,
  createContext,
  useState,
  useContext,
} from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { GlobalStyle } from "ui/css";
import { ExerciseList } from "./views";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Countdown from "views/Countdown/Countdown";
import { Workout, WorkoutsList } from "views";
import { Theme } from "ui/components";
import { SpeechProvider } from "./providers/SpeechProvider/SpeechProvider";

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
    <BrowserRouter>
      <GlobalStyle />
      <Theme>
        <SpeechProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<WorkoutsList />} />
              <Route path="countdown" element={<Countdown />} />
              <Route path="countdown" element={<Countdown />} />
              <Route path="exercises">
                <Route path={":id"} element={<ExerciseList />} />
              </Route>
              <Route path="workout">
                <Route path=":id" element={<Workout />} />
              </Route>
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </SpeechProvider>
      </Theme>
    </BrowserRouter>
  );
};

(async () => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(<Root />);
})();
const registerSW = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
};

registerSW();
