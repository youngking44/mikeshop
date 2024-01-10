import Container from "../../../components/container";
import Loader from "../../../components/loader";
import { useAppSelector } from "../../../hooks/redux";
import Product from "./Product";

const LatestProducts = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  return (
    <section className="relative min-h-[300px] py-5">
      {loading && <Loader />}
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Latest products</h2>
        <div className="flex gap-5 p-2 overflow-scroll md:overflow-hidden">
          {
            //I used slice() method to make a shallow copy of the array and you can also use spread operator
            //before sorting it because Redux-persist put the array in frozen state
            //I also used new Date().getTime() method to convert the date object to number type in order for typescript
            //to allow me to subtract date object
            products
              ?.slice()
              .sort(
                (a, b) =>
                  new Date(a.createdAt).getTime() -
                  new Date(b.createdAt).getTime()
              )
              .slice(0, 4)
              .map((item) => (
                <Product item={item} key={item._id} />
              ))
          }
        </div>
      </Container>
    </section>
  );
};

export default LatestProducts;
