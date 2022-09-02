import { lazy } from "react";

const route = {
  path: "/about",
  index: false,
  caseSensitive: false,
  element: lazy(() => import(".")),
  props: null,
};

export default route;
