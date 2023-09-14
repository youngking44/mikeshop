import React from "react";
import SEO from "../../components/seo";

const title = "Login - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

const Login = () => {
  return (
    <main className="py-60 text-center">
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      Login
    </main>
  );
};

export default Login;
