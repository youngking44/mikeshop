import Container from "../../../components/container";
import { products } from "../../../data";
import Product from "./Product";

const Phones = () => {
  return (
    <section className="pb-10">
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Phones</h2>
        <div className="flex gap-5">
          {products
            .filter((item) => item.category === "Phone")
            .slice(0, 4)
            .map((item) => (
              <Product item={item} type="phone" key={item.id} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Phones;
