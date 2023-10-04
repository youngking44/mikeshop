import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/login";
import Product from "./pages/product";
import Register from "./pages/register";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </Router>
  );
}

export default App;
