import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Designs from "../components/Designs";
import Navbar from "../components/Navbar";

function WebController() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/designs" element={<Designs />} />
      </Routes>
    </>
  );
}

export default WebController;
