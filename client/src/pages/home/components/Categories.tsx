import Container from "../../../components/container";
import Watch from "../../../assets/cat-watch.jpg";
import Phone from "../../../assets/cat-phone.png";
import Laptop from "../../../assets/cat-laptop.jpg";
import Headphone from "../../../assets/cat-headphone.jpg";
import Category from "./Category";

const Categories = () => {
  return (
    <section className="py-5 bg-secondary-100">
      <Container>
        <h2 className="text-3xl mb-2 capitalize">Categories</h2>
        <div className="flex gap-5">
          <Category
            cat="watch"
            title="Wrist watches"
            img={Watch}
            path="/products/cat"
          />
          <Category
            cat="phone"
            title="Phones"
            img={Phone}
            path="/products/cat"
          />
          <Category
            cat="laptop"
            title="Laptops"
            img={Laptop}
            path="/products/cat"
          />
          <Category
            cat="headphone"
            title="Headphones"
            img={Headphone}
            path="/products/cat"
          />
        </div>
      </Container>
    </section>
  );
};

export default Categories;
