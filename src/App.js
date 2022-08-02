import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Educations from "./Pages/Educations";
import Work from "./Pages/Work";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/educations" element={<Educations />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

export default App;
