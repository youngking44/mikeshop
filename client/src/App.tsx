import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/404";
import { HelmetProvider } from "react-helmet-async";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </HelmetProvider>
    </Router>
  );
}

export default App;
