import React from "react";

interface IProp {
  children: React.ReactNode;
}

const Container = ({ children }: IProp) => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
