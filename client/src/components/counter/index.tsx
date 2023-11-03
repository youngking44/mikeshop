import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import { useAppDispatch } from "../../hooks/redux";
import { setItemCount, setItemQuantity } from "../../redux/cart/cartSlice";

interface IProp {
  itemQuantity: number;
  path: string;
  id: string;
  bg?: string;
}

const Counter = ({ itemQuantity, path, id, bg = "bg-white" }: IProp) => {
  const dispatch = useAppDispatch();

  const handleClick = (type: string) => {
    if (path === "product") {
      dispatch(setItemCount(type));
    }

    if (path === "cart" && type === "add") {
      dispatch(setItemQuantity({ type, id }));
    }

    if (path === "cart" && type === "remove" && itemQuantity > 1) {
      dispatch(setItemQuantity({ type, id }));
    }
  };

  return (
    <div
      className={`${bg} w-40 px-5 py-2 flex items-center justify-between rounded-full 
      shadow`}
    >
      <button className="cursor-pointer" onClick={() => handleClick("remove")}>
        <IoIosRemove />
      </button>
      <span>{itemQuantity}</span>
      <button className="cursor-pointer" onClick={() => handleClick("add")}>
        <GrFormAdd />
      </button>
    </div>
  );
};

export default Counter;
