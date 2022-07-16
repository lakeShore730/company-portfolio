import cn from "classnames";

const Button = (props) => {
  const { className = "", children, ...others } = props;

  return (
    <button
      className={cn("rounded-full px-5 py-2 font-semibold text-sm", className)}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
