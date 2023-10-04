import Container from "../../../components/container";
import { products } from "../../../data";
import Product from "./Product";

const LatestProducts = () => {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Latest products</h2>
        <div className="flex gap-5">
          {products.slice(0, 4).map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestProducts;
