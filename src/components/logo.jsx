import cn from "classnames";
import siteSettings from "../settings/site-settings";

const Logo = (props) => {
  const { className, height, width, ...others } = props;
  return (
    <img
      src={siteSettings.logo.image}
      className={cn("rounded-md", className)}
      height={height || "50px"}
      width={width || "50px"}
      alt="logo"
      {...others}
    />
  );
};

export default Logo;
