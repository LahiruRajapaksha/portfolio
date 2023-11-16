import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx("bg-yellow cursor-pointer p-2 m-2", className)}
      {...props}
    />
  );
};

export default Button;
