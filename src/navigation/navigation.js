import { AlertCircle, Archive, Gift, Home, PhoneCall } from "react-feather";

const navigation = [
  {
    id: "home",
    name: "Home",
    path: "/",
    Icon: (props) => <Home {...props} />,
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    Icon: (props) => <AlertCircle {...props} />,
  },
  {
    id: "services",
    name: "Services",
    path: "/services",
    Icon: (props) => <Gift {...props} />,
  },
  {
    id: "projects",
    name: "Projects",
    path: "/projects",
    Icon: (props) => <Archive {...props} />,
  },
  {
    id: "contact",
    name: "Contacts",
    path: "/contact",
    Icon: (props) => <PhoneCall {...props} />,
  },
];

export default navigation;
