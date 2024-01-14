import Container from "../../components/container";
import { BsCheck2Circle } from "react-icons/bs";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import SEO from "../../components/seo";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { resetCart } from "../../redux/cart/cartSlice";

const title = "Checkout success - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const CheckoutSuccess = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, []);
  return (
    <main className="bg-secondary-200">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <Container>
        <section className="w-full h-screen">
          <div className="h-full flex justify-center items-center">
            <div className="w-80 p-5 flex flex-col justify-center items-center gap-2 bg-white shadow-md">
              <BsCheck2Circle size={40} color="#fb923c" />
              <span className="opacity-60">Thank you for your purchase!</span>
              <h1 className="font-bold text-xl capitalize">
                Your order is confirmed!
              </h1>
              <p className="text-center opacity-60">
                You will receive a call from us in 2 minutes time.
              </p>
              <Link to="/">
                <Button type="button" size="small" bg="bg-accent-400">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default CheckoutSuccess;
