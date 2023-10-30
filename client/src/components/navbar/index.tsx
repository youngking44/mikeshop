import { Link } from "react-router-dom";
import Container from "../container";
import Search from "../search";

const itemStyle = `                                                 
  relative before:content-[''] before:w-full before:h-1 before:-mb-1 before:absolute before:bottom-0 
  before:left-0 before:bg-accent-500  before:scale-0 before:transition before:transition-all 
  before:duration-500 before:origin-left hover:before:scale-75
  `;

const active = `
  before:scale-75
`;

const Navbar = () => {
  return (
    <header className="fixed w-full py-5 z-40 bg-primary-700">
      <Container>
        <div className="flex justify-between items-center ">
          <div className="text-3xl font-bold text-white">
            MIKE<span className="text-accent-500">SHOP</span>
          </div>
          <Search />
          <nav>
            <ul className="flex gap-5 font-bold text-white">
              <li className={`${itemStyle} ${active}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${itemStyle}`}>
                <Link to="/register">Register</Link>
              </li>
              <li className={`${itemStyle}`}>
                <Link to="/login">Login</Link>
              </li>
              <li className={`${itemStyle}`}>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
