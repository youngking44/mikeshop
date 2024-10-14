import { Link, useLocation } from "react-router-dom";
import Container from "../container";
import Search from "../search";
import { BsCart3 } from "react-icons/bs";
import Badge from "../badge";
import { useAppSelector } from "../../hooks/redux";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const itemStyle = `                                                 
  relative before:content-[''] before:w-full before:h-1 before:-mb-2 before:absolute before:bottom-0 
  before:left-0 before:bg-white md:before:bg-accent-500 before:scale-0 before:transition before:transition-all 
  before:duration-500 before:origin-left hover:before:scale-100 md:hover:before:scale-75
  `;

const active = `
  before:scale-75
`;

const Navbar = () => {
  const quantity = useAppSelector((state) => state.cart.quantity);
  const { token } = useAppSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed w-full py-5 z-40 bg-primary-700">
      <Container>
        <div className="flex justify-between items-center gap-5 text-white">
          <div
            className="z-30 text-white md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
          <div className="md:flex-1 flex justify-between items-center gap-5">
            <Link to="/">
              <div className="text-2xl md:text-3xl font-bold text-white relative z-30">
                E-<span className="text-accent-500">SHOP</span>
              </div>
            </Link>
            <Search />
            <nav
              className={`w-full md:w-auto h-screen md:h-auto absolute md:static top-0 z-20
                transition-all ease-in-out duration-300 ${
                  showMenu ? "left-0" : "-left-full"
                } `}
            >
              <div className="w-full h-full pt-24 md:pt-0 bg-secondary-500 md:bg-transparent">
                <ul
                  className="flex flex-col md:flex-row md:items-center gap-5 text-xl md:text-base 
                px-5 md:px-0 font-bold text-black md:text-white opacity-70 md:opacity-100"
                  onClick={() => setShowMenu(false)}
                >
                  <li
                    className={`${itemStyle} ${
                      pathname === "/" ? active : ""
                    } `}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`${itemStyle} ${
                      pathname === "/register" ? active : ""
                    } `}
                  >
                    <Link to="/register">Register</Link>
                  </li>
                  {!token && (
                    <li
                      className={`${itemStyle} ${
                        pathname === "/login" ? active : ""
                      } `}
                    >
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
          <Link to={quantity > 0 ? "/cart" : "/"}>
            <Badge quantity={quantity}>
              <BsCart3 size={30} color="white" />
            </Badge>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
