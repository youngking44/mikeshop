import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar />
      {/*    <Home /> */}
    </Router>
  );
}

export default App;
