import { useEffect, useState } from "react";
import Button from "../../components/button";
import Counter from "../../components/counter";
import { Product } from "../../types";
import Color from "./Color";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addProduct, setItemCount } from "../../redux/cart/cartSlice";
import { useMediaQuery } from "react-responsive";

const heading = "font-bold capitalize";

interface IProduct {
  product: Product;
}

const ProductInfo = ({ product }: IProduct) => {
  const [color, setColor] = useState(product?.color[0]);
  const { itemCount, products } = useAppSelector((state) => state.cart);
  const cartItem = products?.find((item) => item._id === product._id);
  const smallScreen = useMediaQuery({ query: "(max-width: 340px" });
  const dispatch = useAppDispatch();

  const handleCart = () => {
    if (cartItem) return;
    dispatch(addProduct({ ...product, color, quantity: itemCount }));
  };

  useEffect(() => {
    dispatch(setItemCount("default"));
  }, []);

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2">
        <p>
          <span className={`${heading}`}>Product name:</span> {product?.title}
        </p>
        <p>
          <span className={`${heading}`}>Brand:</span> {product?.brand}
        </p>
        <p>
          <span className={`${heading}`}>Price:</span> ${product?.price}
        </p>
        <p>
          <span className={`${heading}`}>Category:</span> {product?.category}
        </p>
        <p>
          <span className={`${heading}`}>Color: </span>
          {color}
        </p>
        <p>
          <span className={`${heading}`}>Select Color: </span>
          {product?.color.map((col) => (
            <Color color={col} setColor={setColor} key={col} />
          ))}
        </p>
        <div>
          <h2 className={`${heading}`}>About this item</h2>
          <p>{product?.desc}</p>
        </div>
        <div
          className={`flex ${
            smallScreen ? "flex-col" : "flex-row items-center"
          }  gap-5 mt-5 md:mt-10`}
        >
          <Counter itemQuantity={itemCount} path="product" id={product._id} />
          <Button
            type="button"
            size="small"
            bg={cartItem ? "bg-red-500" : "bg-primary-400"}
            rounded
            fade={cartItem ? "fade" : "no"}
            handleClick={handleCart}
          >
            {cartItem ? "Added to cart" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
