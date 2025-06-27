import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Designs from "../components/Designs";

function WebController() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/designs" element={<Designs />} />
    </Routes>
  );
}

export default WebController;
