import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProjectDetails from "./../Component/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/details/:id",
    element: <ProjectDetails />,
  },
]);

export default router;
