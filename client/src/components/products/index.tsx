import Container from "../container";
import Button from "../button";
import { useEffect, useState } from "react";
import Product from "../product";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import Loader from "../loader";
import SlideButton from "./SlideButton";

const activeClass = "px-2 text-white bg-orange-300";
const catStyle = "w-4/5 border-b-2 cursor-pointer";

const Products = () => {
  const [active, setActive] = useState("all");
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState(10);
  const [slideIndex, setSlideIndex] = useState(0);
  const { products, loading, error } = useAppSelector((state) => state.product);
  const [filteredProds, setFilteredProds] = useState(products);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [totalSlide, setTotalSlide] = useState(Math.ceil(filteredProds.length));
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleFilter = () => setToggleFilter(!toggleFilter);

  const handleClearFilter = () => {
    setActive("all");
    setBrand("all");
    setPrice(10);
  };

  const handleSlide = (type: string) => {
    if (type === "next") {
      setSlideIndex((prev) => (prev < totalSlide - 1 ? prev + 1 : prev));
    } else {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const resize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const updateScreen = () => {
      if (screenSize < 992) {
        setTotalSlide(Math.ceil(filteredProds.length));
      } else if (screenSize < 1200) {
        setTotalSlide(Math.ceil(filteredProds.length / 2));
      } else {
        setTotalSlide(Math.ceil(filteredProds.length / 3));
      }
    };

    screenSize && updateScreen();
  }, [screenSize, filteredProds]);

  useEffect(() => {
    if (active === "all" && brand === "all") {
      setFilteredProds(products);
    } else if (active != "all" && brand === "all") {
      setFilteredProds(
        products.filter((item) => item.category.toLowerCase() === active)
      );
    } else if (active === "all" && brand != "all") {
      setFilteredProds(
        products.filter((item) => item.brand.toLowerCase() === brand)
      );
    } else {
      setFilteredProds(
        products.filter(
          (item) =>
            item.category.toLowerCase() === active &&
            item.brand.toLowerCase() === brand
        )
      );
    }
    setFilteredProds((prev) => prev.filter((item) => item.price >= price));
  }, [active, brand, price, products]);

  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          {screenSize >= 768 ? (
            <h2 className="text-3xl mb-2 capitalize">Our hot products</h2>
          ) : (
            <Button
              type="button"
              size="small"
              bg="bg-accent-500"
              handleClick={handleFilter}
            >
              Filter
            </Button>
          )}

          <Link to="/products">
            <span className="flex items-center font-bold text-accent-500 underline">
              All Products
              <MdKeyboardDoubleArrowRight fontSize={30} />
            </span>
          </Link>
        </div>
        <div className="flex gap-5 py-5 ps-2 md:ps-0 relative overflow-hidden">
          <div
            className={`flex-1 self-start px-5 py-7 bg-white shadow absolute md:static top-5 z-30 transition-all 
            ease-in-out duration-500 ${
              toggleFilter
                ? "translate-x-0"
                : "-translate-x-[100vw] md:translate-x-0"
            }`}
            onClick={handleFilter}
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold opacity-80">Categories</h2>
              <ul className="flex flex-col gap-2">
                <li
                  className={`${active === "all" && activeClass} ${catStyle}`}
                  onClick={() => setActive("all")}
                >
                  All
                </li>
                <li
                  className={`${active === "watch" && activeClass} ${catStyle}`}
                  onClick={() => setActive("watch")}
                >
                  Watch
                </li>
                <li
                  className={`${active === "phone" && activeClass} ${catStyle}`}
                  onClick={() => setActive("phone")}
                >
                  Phone
                </li>
                <li
                  className={`${
                    active === "laptop" && activeClass
                  } ${catStyle}`}
                  onClick={() => setActive("laptop")}
                >
                  Laptop
                </li>
                <li
                  className={`${
                    active === "headphone" && activeClass
                  } ${catStyle}`}
                  onClick={() => setActive("headphone")}
                >
                  Headphone
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold opacity-80">Brand</h2>
              <select
                className="border-2"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="all">All</option>
                <option value="hp">HP</option>
                <option value="dell">Dell</option>
                <option value="apple">Apple</option>
                <option value="techno">Techno</option>
                <option value="infinix">Infinix</option>
                <option value="samsung">Samsung</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold opacity-80">Price</h2>
              <ul className="w-max">
                <li>
                  <input
                    type="range"
                    min={10}
                    max={20000}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </li>
                <li className="flex justify-between">
                  <span>${price}</span>
                  <span>$20,000</span>
                </li>
              </ul>
            </div>
            <Button
              type="button"
              bg="bg-accent-500"
              handleClick={handleClearFilter}
            >
              Clear filter
            </Button>
          </div>
          {/* The reason why i used w-[calc(calc(100%/5)*4)] rather than just using flex-1 or flex-[4], is because i truncated product 
          title. By using fix width it prevent whitespace-nowrap from expanding the size or shape of each product or flex child. */}
          <div className="relative w-full md:w-[calc(calc(100%/3)*2)]  min-h-[460px] lg:w-[calc(calc(100%/5)*4)]">
            {error && (
              <p className="text-red-500">
                {"Something went wrong, try again..."}
              </p>
            )}
            {loading && <Loader />}
            {filteredProds.length === 0 && (
              <div className="w-full h-full flex justify-center items-center bg-secondary-100">
                No Product Found!
              </div>
            )}
            <div className="overflow-hidden">
              {/* I subtracted 20px flex gap i added to the product to get the exact
              size of the Slider in translateX(calc(${slideIndex * -100}% - $
              {20 * slideIndex}px)) */}
              <div
                className={`flex gap-5`}
                style={{
                  transform: `translateX(calc(${slideIndex * -100}% - ${
                    20 * slideIndex
                  }px))`,
                }}
              >
                {filteredProds.map((item) => (
                  <Product product={item} key={item?._id} />
                ))}
              </div>
            </div>
            {filteredProds.length !== 0 && (
              <SlideButton handleSlide={handleSlide} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
