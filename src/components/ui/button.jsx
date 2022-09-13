import cn from "classnames";

const Button = (props) => {
  const { className = "", children, ...others } = props;

  return (
    <button
      className={cn("rounded-full px-7 py-2 font-medium text-base", className)}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
