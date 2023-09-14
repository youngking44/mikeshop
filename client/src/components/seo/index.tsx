import { Helmet } from "react-helmet-async";

interface IProp {
  title: string;
  desc: string;
  keywords: string;
  author: string;
}

const SEO = ({ title, desc, keywords, author }: IProp) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Mike shop",
  desc: "Ecommerce app",
  keywords: "react, typescript, node, mongodb",
  author: "Youngking",
};

export default SEO;
