import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  { path: "/", element: <Root></Root> },
]);
