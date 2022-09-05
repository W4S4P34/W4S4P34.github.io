// React
import { Suspense } from "react";

// Libraries
import { Routes, Route } from "react-router-dom";

// Self-defined Components
import Loading from "./components/Loading";

// Resources
import routes from "./pages/routes";

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Component, props, ...rest }) => {
        return (
          <Route
            key={path}
            {...rest}
            path={path}
            element={
              <Suspense fallback={<Loading />}>
                <Component {...props} />
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
