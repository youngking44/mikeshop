import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { useAppSelector } from "./hooks/redux";
import useRefreshToken from "./hooks/useRefreshToken";
import { Toaster } from "react-hot-toast";
import CheckoutSuccess from "./pages/checkoutSuccess";

interface IProp {
  children: React.ReactNode;
}

function App() {
  const { token, currentUser } = useAppSelector((state) => state.user);
  const { refreshToken, loading } = useRefreshToken();
  console.log("token...", token);
  console.log("Current user...", currentUser);

  const ProtectedRoute = ({ children }: IProp) => {
    if (token) return children;

    return <Navigate to="/login" />;
  };

  const CheckAuth = ({ children }: IProp) => {
    if (!token) return children;
    return <Navigate to="/" />;
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <>
      {!loading && (
        <Router>
          <ScrollToTop />
          <HelmetProvider>
            <Toaster />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <CheckAuth>
                    <Login />
                  </CheckAuth>
                }
              />
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
      )}
    </>
  );
}

export default App;
