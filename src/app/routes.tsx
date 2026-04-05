import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import InteractivePortfolio from "./components/InteractivePortfolio";
import HalpMigrationPage from "./components/HalpMigrationPage";
import ConfluenceAutomationPage from "./components/ConfluenceAutomationPage";
import CompassScorecardsPage from "./components/CompassScorecardsPage";
import StatuspageMigrationPage from "./components/StatuspageMigrationPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <InteractivePortfolio />,
      },
      {
        path: "/confluence-automation",
        element: <ConfluenceAutomationPage />,
      },
      {
        path: "/halp-migration",
        element: <HalpMigrationPage />,
      },
      {
        path: "/compass-scorecards",
        element: <CompassScorecardsPage />,
      },
      {
        path: "/statuspage-migration",
        element: <StatuspageMigrationPage />,
      },
    ],
  },
]);