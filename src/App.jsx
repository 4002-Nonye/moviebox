import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import "react-loading-skeleton/dist/skeleton.css";

import Home from "./pages/Home/Home";
import { MoviesProvider } from "./contexts/MoviesContext";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
