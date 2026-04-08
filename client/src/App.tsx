import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/ServicePage";
import CarPage from "./pages/CarPage";

function App() {
  return (
    <BrowserRouter>
      
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/cars" style={{ marginLeft: "10px" }}>Cars</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/services" element={<Services />} />
        <Route path="/cars" element={<CarPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;