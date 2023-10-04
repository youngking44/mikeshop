import Button from "../../components/button";

const heading = "font-bold capitalize";

const ProductInfo = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2">
        <p>
          <span className={`${heading}`}>Product name:</span> Black Fashion
          Jacket
        </p>
        <p>
          <span className={`${heading}`}>Brand:</span> apple
        </p>
        <p>
          <span className={`${heading}`}>Price:</span> $5000
        </p>
        <p>
          <span className={`${heading}`}>Category:</span> phone
        </p>
        <div>
          <h2 className={`${heading}`}>About this item</h2>
          <p>
            This is the best and latest iPhone 13 pro max, is the one of the
            best Apple product in 2023. It comes with different unique features
            like, sliding, swiping, with maximum privacy and security. It also
            comes with the best camera and good resolution.
          </p>
        </div>
        <div className="flex items-center gap-5 mt-10">
          <div className="w-40 px-5 py-2 flex items-center justify-between rounded-full shadow bg-white">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <Button type="button" bg="bg-primary-400" rounded>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
