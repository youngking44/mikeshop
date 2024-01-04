import React from "react";

interface IProp {
  quantity: number;
  children: React.ReactNode;
}

const Badge = ({ quantity, children }: IProp) => {
  return (
    <div
      before-dynamic-value={quantity}
      className={`relative ${
        quantity >= 1 ? "before:visible" : "before:hidden"
      } before:content-[attr(before-dynamic-value)] before:w-[22px] before:h-[22px] 
      before:rounded-full before:absolute before:-top-3 before:-right-2 before:flex 
      before:justify-center before:items-center before:bg-accent-400 z-30`}
    >
      {children}
    </div>
  );
};

export default Badge;
