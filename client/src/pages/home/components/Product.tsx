import { Link } from "react-router-dom";
import Button from "../../../components/button";

interface IProp {
  item: {
    _id: string;
    title: string;
    desc: string;
    color: string[];
    category: string;
    brand: string;
    price: number;
    img: string;
  };
  type?: string;
}

const Product = ({ item, type }: IProp) => {
  return (
    <div className="min-w-full sm:min-w-[calc(calc(100%-20px)/2)] md:min-w-0 md:flex-1 shadow-lg">
      <div className={`w-full ${type === "phone" ? "h-64 lg:h-96" : "h-60"}`}>
        <img
          className={`w-full h-full ${
            type === "phone" ? "object-contain" : "object-contain"
          }`}
          src={item.img}
          alt=""
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <span className="font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {item.title}
          </span>
          <span className="font-bold text-accent-500">{item.price}</span>
        </div>
        <span className="w-56 md:w-32 lg:w-56 block whitespace-nowrap opacity-90 overflow-hidden overflow-ellipsis">
          {item.desc}
        </span>
        <div className="gap-2 mt-2">
          <Link to={`/products/${item._id}`}>
            <Button type="button" size="small" bg="bg-primary-500">
              More detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
