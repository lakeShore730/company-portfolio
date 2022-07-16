import cn from "classnames";

const Container = (props) => {
  const { className = "", ...others } = props;
  return (
    <div
      className={cn("px-5 md:px-6 w-full max-w-[1050px] mx-auto", className)}
      {...others}
    >
      {props.children}
    </div>
  );
};

export default Container;
