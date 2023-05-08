import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
