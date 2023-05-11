import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import Pizza from "./pizza";
import Confirmation from "./confirmation";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};
export default App;
