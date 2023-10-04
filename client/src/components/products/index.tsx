import Container from "../container";
import Button from "../button";
import { products } from "../../data";
import { useState } from "react";
import Product from "../product";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const activeClass = "px-2 text-white bg-orange-300";
const catStyle = "w-4/5 border-b-2 cursor-pointer";

const Products = () => {
  const [active, setActive] = useState("all");
  const [sliceIndex, setSliceIndex] = useState(6);

  const handleClick = () => {
    setSliceIndex((prevNum) => (prevNum === 6 ? 9 : 6));
  };

  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl mb-2 capitalize">Our hot products</h2>
          <Link to="/products">
            <span className="flex items-center font-bold text-accent-500 underline">
              All Products
              <MdKeyboardDoubleArrowRight fontSize={30} />
            </span>
          </Link>
        </div>
        <div className="flex gap-5 py-5">
          <div className="flex-1 self-start px-5 py-7 shadow">
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
              <select className="border-2">
                <option>All</option>
                <option>HP</option>
                <option>Dell</option>
                <option>Apple</option>
                <option>Techno</option>
                <option>Infinix</option>
                <option>Samsung</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold opacity-80">Price</h2>
              <ul className="w-max">
                <li>
                  <input type="range" min={10} max={80000} />
                </li>
                <li className="flex justify-between">
                  <span>10$</span>
                  <span>80,000$</span>
                </li>
              </ul>
            </div>
            <Button type="button" bg="bg-accent-500">
              Clear filter
            </Button>
          </div>
          <div className="flex-[4] self-start grid grid-cols-3 gap-5">
            {products.slice(0, sliceIndex).map((item) => (
              <Product
                title={item.title}
                desc={item.desc}
                price={item.price}
                img={item.img}
                key={item.id}
              />
            ))}
            <div>
              {sliceIndex === 6 ? (
                <button
                  className="flex items-center font-bold text-accent-500 underline"
                  onClick={handleClick}
                >
                  Show More
                  <MdKeyboardDoubleArrowRight fontSize={30} />
                </button>
              ) : (
                <button
                  className="flex items-center font-bold text-accent-500 underline"
                  onClick={handleClick}
                >
                  <RiArrowLeftDoubleFill fontSize={30} />
                  Hide
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
