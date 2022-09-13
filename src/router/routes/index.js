import Home from "../../views";
import About from "../../views/about";
import Services from "../../views/services";
import Projects from "../../views/projects";
import Contact from "../../views/contact";

const mainRoutes = [
  {
    id: "home",
    path: "/",
    exact: true,
    appLayout: true,
    component: Home,
  },
  {
    id: "about",
    path: "/about",
    exact: true,
    appLayout: true,
    component: About,
  },
  {
    id: "services",
    path: "/services",
    exact: true,
    appLayout: true,
    component: Services,
  },
  {
    id: "projects",
    path: "/projects",
    exact: true,
    appLayout: true,
    component: Projects,
  },
  {
    id: "contact",
    path: "/contact",
    exact: true,
    appLayout: true,
    component: Contact,
  },
];

export default mainRoutes;
