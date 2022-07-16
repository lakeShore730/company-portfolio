import Logo from "../logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavigationDrawer from "../navigationDrawer";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center py-1">
        <div className="flex items-center grow">
          <Logo height="45px" width="45px" />
          <h1 className="text-xl text-gray-700 font-medium ml-2">Lake Shore</h1>
        </div>
        <div className="flex-none">
          <GiHamburgerMenu
            className="text-gray-700 cursor-pointer"
            size={20}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <NavigationDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default MobileNavbar;
