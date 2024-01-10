import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

interface IProp {
  cat: string;
  title: string;
  img: string;
}

const Category = ({ cat, title, img }: IProp) => {
  return (
    <div className="min-w-full sm:min-w-[calc(calc(100%-20px)/2)] md:min-w-0 md:flex-1 p-5 shadow-lg bg-white">
      <h3 className="mb-2 text-xl opacity-90">{title}</h3>
      <div className="w-full h-60">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <Link to={`products/?cat=${cat}`}>
        <button className="flex items-center font-bold mt-2 text-accent-500 underline">
          Shop Now
          <MdKeyboardDoubleArrowRight fontSize={25} />
        </button>
      </Link>
    </div>
  );
};

export default Category;
