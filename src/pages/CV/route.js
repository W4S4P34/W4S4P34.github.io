import { lazy } from "react";

const route = {
  path: "/cv",
  index: false,
  caseSensitive: false,
  element: lazy(() => import(".")),
  props: null,
};

export default route;
