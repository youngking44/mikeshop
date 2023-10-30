import { useMediaQuery } from "react-responsive";
import Image from "../../assets/dummy/watch-image-1.jpg";
import Counter from "../../components/counter";

const tableCell = "text-left px-2 py-5";
const listStyle = "flex gap-2";

const Row = () => {
  const bigScreen = useMediaQuery({ query: "(min-width: 576px)" });

  return (
    <tr className="border-y-2">
      <td className={`${tableCell}`}>
        <div className="flex-1 flex items-center gap-5">
          <img
            className="flex-1 md:flex-none ms:w-14 h-20 object-cover"
            src={Image}
            alt=""
          />
          <span className="font-bold hidden sm:block">Apple watch</span>
          <ul className="sm:hidden flex-1">
            <li className={`${listStyle}`}>
              <span className="font-bold">Name:</span>
              Apple watch
            </li>
            <li className={`${listStyle}`}>
              <span className="font-bold">Price:</span>
              <span className="text-accent-500">$100.00</span>
            </li>
            <li className={`${listStyle}`}>
              <span className="font-bold">Total:</span>
              <span className="text-accent-500">$200.00</span>
            </li>
          </ul>
        </div>
        <div className="sm:hidden mt-5">
          <Counter bg="bg-secondary-200" />
        </div>
      </td>
      {bigScreen && <td className={`${tableCell}`}>$100.00</td>}
      {bigScreen && (
        <td className={`${tableCell}`}>
          <Counter bg="bg-secondary-200" />
        </td>
      )}
      {bigScreen && <td className={`${tableCell} text-accent-500`}>$200.00</td>}
    </tr>
  );
};

export default Row;
