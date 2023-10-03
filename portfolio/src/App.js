import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Hire from "./components/hire/Hire";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />{" "}
            </>
          }
        />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
