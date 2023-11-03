import { useMediaQuery } from "react-responsive";
import Counter from "../../components/counter";
import { CartItem } from "../../types";

const tableCell = "text-left px-2 py-5";
const listStyle = "flex gap-2";

interface IProp {
  item: CartItem;
}

const Row = ({ item }: IProp) => {
  const bigScreen = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <tr className="border-y-2">
      <td className={`${tableCell}`}>
        <div className="flex-1 flex items-center gap-5">
          <img
            className="flex-1 md:flex-none ms:w-14 h-20 object-cover"
            src={item.img}
            alt=""
          />
          <span className="font-bold hidden sm:block">{item.title}</span>
          <ul className="sm:hidden flex-1">
            <li className={`${listStyle}`}>
              <span className="font-bold">Name:</span>
              {item.title}
            </li>
            <li className={`${listStyle}`}>
              <span className="font-bold">Price:</span>
              <span className="text-accent-500">${item.price}</span>
            </li>
            <li className={`${listStyle}`}>
              <span className="font-bold">Total:</span>
              <span className="text-accent-500">
                ${item.price * item.quantity}
              </span>
            </li>
          </ul>
        </div>
        <div className="sm:hidden mt-5">
          <Counter
            itemQuantity={item.quantity}
            path="cart"
            id={item._id}
            bg="bg-secondary-200"
          />
        </div>
      </td>
      {bigScreen && <td className={`${tableCell}`}>${item.price}</td>}
      {bigScreen && (
        <td className={`${tableCell}`}>
          <Counter
            itemQuantity={item.quantity}
            path="cart"
            id={item._id}
            bg="bg-secondary-200"
          />
        </td>
      )}
      {bigScreen && (
        <td className={`${tableCell} text-accent-500`}>
          ${item.price * item.quantity}
        </td>
      )}
    </tr>
  );
};

export default Row;
