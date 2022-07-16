import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainRoutes from "./routes";
import AppLayout from "../layouts/app-layout";
import Container from "../components/ui/container";
import ScrollToTop from "./routes/scroll-to-top";

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
              element={
                route.appLayout ? (
                  <AppLayout>{<route.component />}</AppLayout>
                ) : (
                  <Container>
                    <route.component />
                  </Container>
                )
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
