import { Link } from "react-router-dom";
import Button from "../button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Product as ProductType } from "../../types";
import { addProduct } from "../../redux/cart/cartSlice";

interface IProduct {
  product: ProductType;
}

const Product = ({ product }: IProduct) => {
  const { products } = useAppSelector((state) => state.cart);
  const cartItem = products?.find((item) => item._id === product._id);
  const dispatch = useAppDispatch();

  const handleCart = () => {
    if (cartItem) return;
    dispatch(addProduct({ ...product, color: product.color[0], quantity: 1 }));
  };

  return (
    <div
      className={`w-full lg:min-w-[calc(calc(100%-20px)/2)] xl:min-w-[calc(calc(100%-40px)/3)] 
      self-start p-5 bg-secondary-200`}
    >
      <div className="w-full h-52">
        <img className="w-full h-full object-cover" src={product.img} alt="" />
      </div>
      <div className="w-full py-5">
        <div className="flex justify-between gap-2">
          <span className="font-bold line-clamp-1">{product.title}</span>
          <span className="font-bold text-accent-500">{product.price}</span>
        </div>
        <span className="block opacity-90 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.desc}
        </span>
        <div className="flex justify-between gap-2 mt-2">
          <Link to={`/products/${product._id}`}>
            <Button type="button" size="small" bg="bg-blue-500">
              More Details
            </Button>
          </Link>
          {!cartItem && (
            <Button
              type="button"
              size="small"
              bg="bg-black"
              handleClick={handleCart}
            >
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
