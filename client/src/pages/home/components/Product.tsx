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
    <div className="flex-1 shadow-lg">
      <div className={`w-full ${type === "phone" ? "h-96" : "h-60"}`}>
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
          <span className="font-bold">{item.title}</span>
          <span className="font-bold text-accent-500">{item.price}</span>
        </div>
        <span className="w-56 block whitespace-nowrap opacity-90 overflow-hidden overflow-ellipsis">
          {item.desc}
        </span>
        <div className="gap-2 mt-2">
          <Button type="button" size="small" bg="bg-primary-500">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
