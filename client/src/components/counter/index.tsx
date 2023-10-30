import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";

const Counter = ({ bg = "bg-white" }) => {
  return (
    <div
      className={`${bg} w-40 px-5 py-2 flex items-center justify-between rounded-full 
      shadow`}
    >
      <button className="cursor-pointer">
        <IoIosRemove />
      </button>
      <span>2</span>
      <button className="cursor-pointer">
        <GrFormAdd />
      </button>
    </div>
  );
};

export default Counter;
