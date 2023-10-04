import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface IProp {
  cat: string;
  img: string;
  path: string;
}

const Category = ({ cat, img, path }: IProp) => {
  return (
    <div className="flex-1 p-5 shadow-lg bg-white">
      <h3 className="mb-2 text-xl opacity-90">{cat}</h3>
      <div className="w-full h-60">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <Link to={path}>
        <button className="flex items-center font-bold mt-2 text-accent-500 underline">
          Shop Now
          <MdKeyboardDoubleArrowRight fontSize={25} />
        </button>
      </Link>
    </div>
  );
};

export default Category;
