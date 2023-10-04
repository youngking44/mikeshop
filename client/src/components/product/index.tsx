import Button from "../button";

interface IProp {
  title: string;
  desc: string;
  price: string;
  img: string;
}

const Product = ({ title, desc, price, img }: IProp) => {
  return (
    <div className="self-start p-5 bg-secondary-200">
      <div className="h-52">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className="py-5">
        <div className="flex justify-between">
          <span className="font-bold">{title}</span>
          <span className="font-bold text-accent-500">{price}</span>
        </div>
        <span className="w-56 block whitespace-nowrap opacity-90 overflow-hidden overflow-ellipsis">
          {desc}
        </span>
        <div className="flex justify-between gap-2 mt-2">
          <Button type="button" size="small" bg="bg-blue-500">
            More Details
          </Button>
          <Button type="button" size="small" bg="bg-black">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
