import { AiOutlineHome } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { MdHomeRepairService } from "react-icons/md";
import { RiProjector2Line } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";

const navigation = [
  {
    id: "home",
    name: "Home",
    path: "/",
    Icon: (props) => <AiOutlineHome {...props} />,
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    Icon: (props) => <ImInfo {...props} />,
  },
  {
    id: "services",
    name: "Services",
    path: "/services",
    Icon: (props) => <MdHomeRepairService {...props} />,
  },
  {
    id: "projects",
    name: "Projects",
    path: "/projects",
    Icon: (props) => <RiProjector2Line {...props} />,
  },
  {
    id: "contact",
    name: "Contacts",
    path: "/contact",
    Icon: (props) => <IoMdCall {...props} />,
  },
];

export default navigation;
