import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "./RouterConfig";
import Loading from "../utils/Loading";

export const ComponentList = () => {
  return (
    <Routes>
      {RoutesConfig.map(({ Layout, Component, ...rest }) => {
        if (Layout == null) {
          return <Route key={rest.title} path={rest.path} element={<></>} />;
        }

        return (
          <Route
            key={rest.title}
            path={rest.path}
            element={
              <Suspense fallback={<Loading />}>
                <Layout>{Component ? <Component /> : <h2>Soon!</h2>}</Layout>
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  );
};
