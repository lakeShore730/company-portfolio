import cn from "classnames";

/*
  Size
 * header
 * subHeader
 * paragraph
 
  Type 
  * primary
  * lightPrimary
  * darkPrimary
  * secondary
  * lightSecondary
  * darkSecondary
  * error
  * surface
  * default
 */

const typoClassName = {
  header: "text-[21px] lg:text-[32px] font-[600]",
  subHeader: "text-[18px] lg:text-[25px] font-[500]",
  paragraph: "text-[16px]",
};

const Typography = (props) => {
  const {
    size = "paragraph",
    type = "default",
    className = "",
    children,
    ...others
  } = props;

  return (
    <p
      className={cn(typoClassName[size] || "", className, {
        "text-gray-800": size === "header" && type === "default",
        "text-gray-700":
          (size === "subHeader" && type === "default") ||
          (size === "paragraph" && type === "default"),
        "text-primary": type === "primary",
        "text-lightPrimary": type === "lightPrimary",
        "text-darkPrimary": type === "darkPrimary",
        "text-secondary": type === "secondary",
        "text-lightSecondary": type === "lightSecondary",
        "text-darkSecondary": type === "darkSecondary",
        "text-error": type === "error",
        "text-surface": type === "surface",
      })}
      {...others}
    >
      {children}
    </p>
  );
};

export default Typography;
