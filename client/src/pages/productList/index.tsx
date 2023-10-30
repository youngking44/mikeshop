import { useLocation } from "react-router-dom";
import Container from "../../components/container";
import Product from "../../components/product";
import SEO from "../../components/seo";

import { useAppSelector } from "../../hooks/redux";

// Meta data
const title = "All products - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const ProductList = () => {
  const { products, loading, error } = useAppSelector((state) => state.product);
  const { search } = useLocation();
  const cat = search?.split("=")[1];
  const catList = ["phone", "watch", "laptop", "headphone"];

  return (
    <main className="pt-24">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <section>
        <Container>
          <h1 className="text-3xl my-5 capitalize">
            {cat ? cat : "All products"}
          </h1>
          <div className="mb-10 grid grid-cols-4 gap-5">
            {cat && catList.includes(cat)
              ? products
                  .filter((item) => item.category.toLowerCase() === cat)
                  .map((item) => (
                    <Product
                      id={item._id}
                      title={item.title}
                      desc={item.desc}
                      price={item.price}
                      img={item.img}
                      key={item._id}
                    />
                  ))
              : products.map((item) => (
                  <Product
                    id={item._id}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    img={item.img}
                    key={item._id}
                  />
                ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProductList;
