import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sefirot from "./pages/Sefirot";
import Carousel from "./components/Carousel";
import Detail from "./pages/Detail";

// App principal
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/sefirot/:id" element={<Sefirot />} />
      </Routes>
    </Router>
  );
}
