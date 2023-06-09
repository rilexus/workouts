import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { GlobalStyle } from "ui/css";
import { ExerciseList } from "./views";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Countdown from "views/Countdown/Countdown";
import { Workout } from "views";

const Div = styled.div``;

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
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ExerciseList />} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="workout">
            <Route path=":id" element={<Workout />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

(async () => {
  const container = document.getElementById("app");
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
})();
