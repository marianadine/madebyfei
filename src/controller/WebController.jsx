import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Designs from "../components/Designs";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function WebController() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default WebController;
