import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainRoutes from "./routes";
import AppLayout from "../layouts/app-layout";
import Container from "../components/ui/container";
import ScrollToTop from "./routes/scroll-to-top";

const MergeLayoutRoute = (props) => {
  const { children, route } = props;

  const AppLayoutWrapper = route.appLayout ? AppLayout : Container;
  return <AppLayoutWrapper>{children}</AppLayoutWrapper>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {mainRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              element={
                <MergeLayoutRoute route={route}>
                  <route.component />
                </MergeLayoutRoute>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
