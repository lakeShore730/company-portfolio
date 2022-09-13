import { useState } from "react";
import { Menu } from "react-feather";
import Logo from "../logo";
import NavigationDrawer from "../navigationDrawer";
import Typography from "../ui/typography";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center py-1">
        <div className="flex items-center grow">
          <Logo height="45px" width="45px" />
          <Typography size="subHeader" type="surface" className="ml-2">
            Lake Shore
          </Typography>
        </div>
        <div className="flex-none">
          <Menu
            className="cursor-pointer text-white"
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
