import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        loader: () => redirect("/ETV0001"), // as there is no home pase this will redirect to the events page
        // element: <Home />,
      },
      {
        path: ":eventID",
        element: <Home />,
      },
    ],
  },
]);

export default router;
