import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import cn from "classnames";
import { X } from "react-feather";
import navigation from "../../navigation/navigation";
import Logo from "../logo";

const NavigationDrawer = (props) => {
  const { open, setOpen } = props;
  const { pathname } = useLocation();
  const toggleDrawer = () => setOpen(false);

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      direction="right"
      size="270px"
      className=""
    >
      <div className="px-3 py-2">
        <div className="flex  items-center">
          <div className="flex items-center gap-2 grow">
            <Logo height="35" width="35px" />
            <h1 className="text-lg text-gray-700 font-medium">Lake Shore</h1>
          </div>
          <X
            size={25}
            className="glow-none cursor-pointer text-gray-600 select-none"
            onClick={toggleDrawer}
          />
        </div>

        <div className="mt-8">
          {navigation.map((nav) => (
            <div key={nav.id} className="mt-5">
              <Link
                to={nav.path}
                className={cn("flex items-center px-2 py-2 rounded-sm", {
                  "bg-indigo-100": nav.path === pathname,
                })}
                onClick={toggleDrawer}
              >
                <nav.Icon
                  size="18"
                  className={cn({
                    "text-indigo-900": nav.path === pathname,
                    "text-gray-700": nav.path !== pathname,
                  })}
                />
                <p className="ml-4 text-base text-gray-700">{nav.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
