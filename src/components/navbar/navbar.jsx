import { Link } from "react-router-dom";
import Logo from "../logo";
import navigation from "../../navigation/navigation";
import MobileNavbar from "./mobile-navbar";
import { useUiContext } from "../../contexts/ui-context";
import Button from "../ui/button";
import { useLocation } from "react-router-dom";
import cn from "classnames";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isMobileLayout } = useUiContext();
  if (isMobileLayout) return <MobileNavbar />;

  return (
    <div>
      <div className="flex items-center py-2">
        <Link to="/">
          <Logo className="flex-none" />
        </Link>
        <div className="grow flex justify-end">
          <div className="inline-block">
            <div className="flex items-center space-x-12 lg:space-x-16">
              {navigation.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  className={cn("hover:text-primary font-semibold text-sm", {
                    "text-primary": pathname === item.path,
                    "text-gray-700": pathname !== item.path,
                  })}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pl-20 xl:pl-24 2xl:pl-32">
                <Link to="/contact">
                  <Button className="bg-primary text-slate-100 hover:bg-[#61045f]">
                    Let's talk
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
