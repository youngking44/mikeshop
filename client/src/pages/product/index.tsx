import Container from "../../components/container";
import MainImage from "../../assets/dummy/watch-image-5.jpg";
import ImageGalleryOne from "../../assets/dummy/watch-image-1.jpg";
import ImageGalleryTwo from "../../assets/dummy/watch-image-2.jpg";
import ImageGalleryThree from "../../assets/dummy/watch-image-3.jpg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import ProductInfo from "./ProductInfo";

const galleryStyle = "w-32 h-32 mb-5 object-cover";
const roundedBtn = `w-10 h-10 rounded-full flex justify-center items-center 
 absolute top-0 bottom-0 m-auto z-20 bg-accent-400`;

const Product = () => {
  return (
    <section className="w-full min-h-screen pt-20 bg-secondary-200">
      <Container>
        <div className="flex gap-10 py-10">
          <div className="flex-1 flex gap-5">
            <div>
              <img className={`${galleryStyle}`} src={ImageGalleryOne} alt="" />
              <img className={`${galleryStyle}`} src={ImageGalleryTwo} alt="" />
              <img
                className={`${galleryStyle}`}
                src={ImageGalleryThree}
                alt=""
              />
            </div>
            <div className="relative flex-1 bg-secondary-400">
              <button className={`${roundedBtn} -left-4`}>
                <IoIosArrowBack fontSize={25} color="#ffffff" />
              </button>
              <img className="w-full h-full" src={MainImage} alt=" " />
              <button className={`${roundedBtn} -right-4`}>
                <MdOutlineNavigateNext fontSize={33} color="#ffffff" />
              </button>
            </div>
          </div>
          <ProductInfo />
        </div>
      </Container>
    </section>
  );
};

export default Product;
