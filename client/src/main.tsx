import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import ISSTrack from "./pages/ISStrack/ISSTrack";
import DetailLaunches from "./pages/Launches/DetailLaunches";
import DetailEvents from "./pages/Events/DetailEvents";
import NotFound from "./pages/NotFound/NotFound";
import Expedition from "./pages/Expedition/Expedition";
import Rocketdetail from "./pages/Rocket/RocketDetail";
import LandingPage from "./pages/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Events/:id",
        element: <DetailEvents />,
      },
      {
        path: "/Launch/:id",
        element: <DetailLaunches />,
      },
      {
        path: "/IssTrack",
        element: <ISSTrack />,
      },
      {
        path: "/Expedition/:id",
        element: <Expedition />,
      },
      {
        path: "/Rocket/:id",
        element: <Rocketdetail />,
      },
      {
        path: "/Landing/:id",
        element: <Landing />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
