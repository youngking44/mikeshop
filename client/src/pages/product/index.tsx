import Container from "../../components/container";
// import ImageGalleryOne from "../../assets/dummy/watch-image-1.jpg";
// import ImageGalleryTwo from "../../assets/dummy/watch-image-2.jpg";

// import ImageGalleryThree from "../../assets/dummy/watch-image-3.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductInfo from "./ProductInfo";
import SEO from "../../components/seo";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import toast from "react-hot-toast";
import Loader from "../../components/loader";

// Meta data
const title = "Product page - Mike shop";
const desc = "MERN stack ecommerce project";
const keywords = "react, typescript, node, mongodb";
const author = "Youngking";

// Tailwindcss classes
const topButton = "flex items-center cursor-pointer";
// const galleryStyle = "w-32 h-32 mb-5 object-cover";
// const roundedBtn = `w-10 h-10 rounded-full flex justify-center items-center
//  absolute top-0 bottom-0 m-auto z-20 bg-accent-400`;

const Product = () => {
  const { id } = useParams();
  const { loading, error } = useAppSelector((state) => state.product);
  const product = useAppSelector((state) =>
    state.product.products?.find((item) => item._id === id)
  );

  if (!product?._id) return;

  return (
    <main>
      <SEO title={title} desc={desc} keywords={keywords} author={author} />
      {error && toast.error("Something went wrong, refresh your browser...")}
      {loading && <Loader />}
      <section className="w-full min-h-screen pt-20 bg-secondary-200">
        <Container>
          <div className="py-5 flex justify-between">
            <Link to="/">
              <div className={`${topButton}`}>
                <MdKeyboardArrowLeft />
                Back
              </div>
            </Link>
            <div className={`${topButton}`}>
              Next
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 pb-10">
            <div className="flex-1 flex gap-5">
              {/*        <div>
                <img
                  className={`${galleryStyle}`}
                  src={ImageGalleryOne}
                  alt=""
                />
                <img
                  className={`${galleryStyle}`}
                  src={ImageGalleryTwo}
                  alt=""
                />
                <img
                  className={`${galleryStyle}`}
                  src={ImageGalleryThree}
                  alt=""
                />
              </div> */}
              <div className="relative flex-1">
                {/* <button className={`${roundedBtn} -left-4`}>
                  <MdKeyboardArrowLeft fontSize={25} color="#ffffff" />
                </button> */}
                <img
                  className="w-full h-full md:h-3/4 object-cover md:object-contain"
                  src={product?.img}
                  alt=" "
                />
                {/* <button className={`${roundedBtn} -right-4`}>
                  <MdKeyboardArrowRight fontSize={25} color="#ffffff" />
                </button> */}
              </div>
            </div>
            <ProductInfo product={product} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Product;
