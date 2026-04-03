import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Services from "./pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/services" element={<Services />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;