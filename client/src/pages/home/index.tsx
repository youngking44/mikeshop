import React from "react";
import Hero from "./components/Hero";
import SEO from "../../components/seo";

const title = "Shop now - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const Home = () => {
  return (
    <main>
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      <Hero />
    </main>
  );
};

export default Home;
