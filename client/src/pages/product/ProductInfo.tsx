import Button from "../../components/button";
import Counter from "../../components/counter";
import { Product } from "../../types";

const heading = "font-bold capitalize";

interface IProduct {
  product: Product | undefined;
}

const ProductInfo = ({ product }: IProduct) => {
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
        <div>
          <h2 className={`${heading}`}>About this item</h2>
          <p>{product?.desc}</p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <Counter />
          <Button type="button" bg="bg-primary-400" rounded>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
