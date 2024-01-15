import { useEffect, useState } from "react";
import Container from "../../components/container";
import SEO from "../../components/seo";
import { useAppSelector } from "../../hooks/redux";
import Row from "./Row";
import Summary from "./Summary";
import { useMediaQuery } from "react-responsive";
import Loader from "../../components/loader";

// Meta data
const title = "Your cart - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const tableCell = "text-left py-5";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const mobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { products } = useAppSelector((state) => state.cart);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main>
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      {loading && <Loader />}
      <section className="w-full min-h-screen pt-20">
        <Container>
          <div className="py-10">
            <h1 className={`${mobileScreen && "mb-5"} text-3xl font-semibold`}>
              Shopping Cart
            </h1>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-[3]">
                <table className="w-full border-collapse">
                  {!mobileScreen && (
                    <thead>
                      <tr>
                        <th className={`${tableCell}`}>Product</th>
                        <th className={`${tableCell}`}> Price </th>
                        <th className={`${tableCell} pl-10`}>Quantity</th>
                        <th className={`${tableCell}`}> Subtotal</th>
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {products?.map((item) => (
                      <Row item={item} key={item._id} />
                    ))}
                  </tbody>
                </table>
              </div>
              <Summary setLoading={setLoading} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Cart;
