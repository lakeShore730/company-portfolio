import { Link } from "react-router-dom";
import Logo from "./logo";
import Button from "./ui/button";

const KeepInTouch = () => {
  return (
    <div>
      <div className="flex items-center">
        <hr className="grow" />
        <div className="grow-0 border border-indigo-100 w-[70px] h-[70px] flex justify-center items-center rounded-full overflow-hidden mx-1">
          <Logo width="50px" height="50px" />
        </div>
        <hr className="grow" />
      </div>
      <div className="w-full max-w-lg mx-auto">
        <p className="text-center text-secondary font-semibold text-xl mt-3">
          Lake Shore
        </p>
        <p className="text-center text-gray-600 mt-5 text-sm font-medium leading-6">
          Dummy text is also used to demonstrate the appearance of different
          typefaces and layouts.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <Button className="bg-secondary text-gray-900 mt-5 hover:bg-darkSecondary">
              Keep in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeepInTouch;
