import React from "react";

interface IProp {
  type: "button" | "submit" | "reset" | undefined;
  color?: string;
  bg?: string;
  size?: string;
  fade?: string;
  rounded?: boolean;
  width?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const Button = ({
  type,
  color = "text-white",
  bg,
  size,
  rounded,
  fade,
  width = "w-max",
  handleClick,
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
      } ${
        fade === "fade" && "opacity-50 cursor-not-allowed"
      } transition-colors ease-in-out duration-300 hover:bg-opacity-70`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
