import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProjectDetails from "./../Component/ProjectDetails";
import ErrorPage from "../Component/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/details/:id",
    element: <ProjectDetails />,
  },
  {
    path:'*',
    element:<ErrorPage/>
  }
]);

export default router;
