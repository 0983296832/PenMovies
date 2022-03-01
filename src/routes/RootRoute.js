import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu/MainMenu";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";
import MoviesCategory from "../pages/MoviesCategory/MoviesCategory";
import Login from "../pages/LoginPage/Login";
import PrivateRoute from "../guards/PrivateRoute";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<HomePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/detail/:category/:id" element={<DetailPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/:category" element={<MoviesCategory />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/:category/search/:keyword"
            element={<MoviesCategory />}
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/:category" element={<MoviesCategory />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRoute;
