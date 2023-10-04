import Hero from "./components/Hero";
import SEO from "../../components/seo";
import Products from "../../components/products";
import Categories from "./components/Categories";
import LatestProducts from "./components/LatestProducts";
import Phones from "./components/Phones";

const title = "Shop now - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const Home = () => {
  return (
    <main>
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <Hero />
      <Products />
      <Categories />
      <LatestProducts />
      <Phones />
    </main>
  );
};

export default Home;
