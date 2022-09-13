import { Link } from "react-router-dom";
import Logo from "../logo";
import navigation from "../../navigation/navigation";
import MobileNavbar from "./mobile-navbar";
import Button from "../ui/button";
import cn from "classnames";
import useWindowSize from "../../utils/use-window-size";

const Navbar = () => {
  const { width } = useWindowSize();
  if (width < 1024) return <MobileNavbar />;

  return (
    <div className="flex justify-between items-center py-2">
      <Link to="/" className="flex-none">
        <Logo />
      </Link>

      <div className="flex items-center gap-12 xl:gap-16">
        {navigation.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className={cn("tracking-wide font-medium text-base text-white")}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link to="/contact">
        <Button className="border-[1px] border-white text-white">
          Let's talk
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <Link to="/" className="flex-none">
          <Logo />
        </Link>

        <div className="flex justify-end">
          <div className="inline-block">
            <div className="flex items-center space-x-12 lg:space-x-16">
              {navigation.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  className={cn(
                    "tracking-wide font-medium text-base text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pl-20 xl:pl-24 2xl:pl-32">
          <Link to="/contact">
            <Button className="border-[1px] border-white text-white">
              Let's talk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
