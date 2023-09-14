import React from "react";

interface IProp {
  type: "button" | "submit" | "reset" | undefined;
  color?: string;
  bg?: string;
  rounded: boolean;
  children: React.ReactNode;
}

const Button = ({
  type,
  color = "text-white",
  bg,
  rounded,
  children,
}: IProp) => {
  return (
    <button
      type={type}
      className={`w-max px-9 py-3 ${rounded ? "rounded-full" : "rounded-lg"} 
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
