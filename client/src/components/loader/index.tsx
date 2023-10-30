import { DotSpinner } from "@uiball/loaders";

const Loader = () => {
  return (
    <div
      className="absolute top-0 right-0 bottom-0 left-0  z-20 flex justify-center items-center
    bg-loader"
    >
      <DotSpinner size={40} speed={0.9} color="black" />
    </div>
  );
};

export default Loader;
