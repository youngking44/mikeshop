import Container from "../../../components/container";
import Loader from "../../../components/loader";
import { useAppSelector } from "../../../hooks/redux";
import Product from "./Product";

const Phones = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  return (
    <section className="relative min-h-[300px] pb-10">
      {loading && <Loader />}
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Phones</h2>
        <div className="w-full flex gap-5 p-2 overflow-scroll md:overflow-hidden">
          {products
            .filter((item) => item.category === "Phone")
            .slice(0, 4)
            .map((item) => (
              <Product item={item} type="phone" key={item._id} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Phones;
