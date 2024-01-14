import { useLocation } from "react-router-dom";
import Container from "../../components/container";
import Product from "../../components/product";
import SEO from "../../components/seo";

import { useAppSelector } from "../../hooks/redux";
import Loader from "../../components/loader";

// Meta data
const title = "All products - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const ProductList = () => {
  const { products, loading } = useAppSelector((state) => state.product);
  const { search } = useLocation();
  const cat = search?.split("=")[1];
  const catList = ["phone", "watch", "laptop", "headphone"];

  return (
    <main className="w-full min-h-screen pt-24">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      {loading && <Loader />}
      <section>
        <Container>
          <h1 className="text-3xl my-5 capitalize">
            {cat ? cat : "All products"}
          </h1>
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cat && catList.includes(cat)
              ? products
                  .filter((item) => item.category.toLowerCase() === cat)
                  .map((item) => <Product product={item} key={item._id} />)
              : products.map((item) => (
                  <Product product={item} key={item._id} />
                ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProductList;
