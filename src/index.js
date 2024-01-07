import React, { useMemo } from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";
import { GlobalStyle } from "ui/css";
import { ExerciseList } from "./views";
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter,
  Link,
  useParams,
} from "react-router-dom";
import Countdown from "views/Countdown/Countdown";
import { Workout, WorkoutsList } from "views";
import { Theme } from "ui/components";
import { SpeechProvider } from "./providers/SpeechProvider/SpeechProvider";
import { Exercise } from "views/Exercise";
import { LinkProvider } from "./providers/LinkProvider";
import { usePromise } from "hooks/usePromise";
import workouts from "./workouts";
import exercises from "./workouts/exercises";

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

const NoMatch = () => {
  return <div>404</div>;
};

const findPage = (id, children) => {
  if (typeof id === "undefined") {
    return children[0];
  }

  const child = children.find((child) => child.id === id);
  if (typeof child !== "undefined") {
    return child;
  }

  for (const child of children) {
    const t2 = findPage(id, child.children);

    if (typeof t2 !== "undefined") {
      return t2;
    }
  }
};

// const Root = () => {
//   return (
//     <LinkProvider value={fetch}>
//       <GlobalStyle />
//       <Theme>
//         <SpeechProvider>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route index element={<WorkoutsList />} />
//                 <Route path="countdown" element={<Countdown />} />
//                 <Route path="countdown" element={<Countdown />} />
//                 <Route path="workout">
//                   <Route path={":id"} element={<ExerciseList />} />
//                   <Route path="exercise">
//                     <Route path={":id"} element={<Exercise />} />
//                   </Route>
//                 </Route>
//                 {/*<Route path="workout">*/}
//                 {/*  <Route path=":id" element={<Workout />} />*/}
//                 {/*</Route>*/}
//               </Route>
//               <Route path="*" element={<NoMatch />} />
//             </Routes>
//           </BrowserRouter>
//         </SpeechProvider>
//       </Theme>
//     </LinkProvider>
//   );
// };

const PageTree = ({ pages }) => {
  const { id } = useParams();
  const page = useMemo(() => findPage(id, pages), [id]);
  const Component = page.Component;
  const props = page.props;

  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <Component {...props} />
          </div>
        }
      />
      <Route path="page/:id/*" element={<PageTree pages={pages} />} />
      <Route path="workout/:id/*" element={<PageTree pages={pages} />} />
      <Route path="exercise/:id/*" element={<PageTree pages={pages} />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

const useWorkouts = () => {
  return usePromise(async () => {
    return workouts.map((workout) => {
      return {
        ...workout,
        exercises: workout.exercises.map((id) => exercises[id]),
      };
    });
  }, []);
};

const Workouts = () => {
  const { data: workouts, status } = useWorkouts();

  if (status === "pending") {
    return null;
  }

  const pages = [
    {
      id: "",
      props: {},
      Component: WorkoutsList,
      children: workouts.map((workout) => {
        return {
          id: workout.id,
          props: workout,
          Component: ExerciseList,
          children: workout.exercises.map((exercise) => {
            return {
              id: exercise.id,
              props: exercise,
              Component: Exercise,
            };
          }),
        };
      }),
    },
  ];

  return <PageTree pages={pages} />;
};

const Root = () => {
  return (
    <LinkProvider value={fetch}>
      <GlobalStyle />
      <Theme>
        <Layout>
          <SpeechProvider>
            <BrowserRouter>
              <Workouts />
            </BrowserRouter>
          </SpeechProvider>
        </Layout>
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
