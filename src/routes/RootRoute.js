import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/MainMenu";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";
import MoviesCategory from "../pages/MoviesCategory/MoviesCategory";

const rootRoute = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail/:category/:id" element={<DetailPage />} />
        <Route path="/:category" element={<MoviesCategory />} />
        <Route path="/:category" element={<MoviesCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default rootRoute;
