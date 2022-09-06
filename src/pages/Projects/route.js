// React
import { lazy } from "react";

const route = {
  path: "/projects",
  index: false,
  caseSensitive: false,
  element: lazy(() => import(".")),
  props: null,
};

export default route;
