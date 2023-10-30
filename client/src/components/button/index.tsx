import React from "react";

interface IProp {
  type: "button" | "submit" | "reset" | undefined;
  color?: string;
  bg?: string;
  size?: string;
  rounded?: boolean;
  width?: string;
  children: React.ReactNode;
}

const Button = ({
  type,
  color = "text-white",
  bg,
  size,
  rounded,
  width = "w-max",
  children,
}: IProp) => {
  return (
    <button
      type={type}
      className={`${width} ${size === "small" ? "px-3 py-2" : "px-8 py-2"} ${
        rounded ? "rounded-full" : "rounded-lg"
      } 
       ${bg && color} ${bg ? bg : "bg-transparent"}
        ${!bg && "rounded-full"} ${!bg && "border-2"} ${
        !bg && "border-black"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
