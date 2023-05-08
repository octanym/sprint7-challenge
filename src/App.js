import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Pizza from "./Pizza";
import Confirmation from "./Confirmation";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
};
export default App;
