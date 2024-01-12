import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/login";
import Product from "./pages/product";
import Register from "./pages/register";
import Footer from "./components/footer";
import Cart from "./pages/cart";
import ProductList from "./pages/productList";
import ScrollToTop from "./components/scrollToTop";
import useRefreshToken from "./hooks/useRefreshToken";
import { Toaster } from "react-hot-toast";
import CheckoutSuccess from "./pages/checkoutSuccess";

function App() {
  const { refreshToken } = useRefreshToken();

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <HelmetProvider>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </Router>
  );
}

export default App;
