import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        loader: () => redirect("/EVT0001"), // as there is no home pase this will redirect to the events page
        // element: <Home />,
      },
      {
        path: ":eventID",
        element: <Home />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
