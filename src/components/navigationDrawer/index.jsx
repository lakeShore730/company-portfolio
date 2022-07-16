import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import navigation from "../../navigation/navigation";
import Logo from "../logo";
import { RiCloseLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import cn from "classnames";

/* 
This drawer (mobile-navigation-drawer) is for the mobile view only
*/

const NavigationDrawer = (props) => {
  const { pathname } = useLocation();
  const { open, setOpen } = props;
  const toggleDrawer = () => setOpen(false);

  return (
    <div>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        direction="left"
        size="270px"
        className=""
      >
        <div className="px-3 py-2">
          <div className="flex  items-center">
            <div className="flex items-center grow">
              <Logo height="35" width="35px" />
              <h1 className="text-md text-gray-700 font-medium">Lake Shore</h1>
            </div>
            <RiCloseLine
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
                    size="20"
                    className={cn({
                      "text-indigo-900": nav.path === pathname,
                      "text-gray-700": nav.path !== pathname,
                    })}
                  />
                  <p className="ml-4 text-gray-600">{nav.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;
