import { useState } from "react";
import Navbar from "./navbar";

import CarouselSlide from "./CarouselSlide/carousel-slide.js";
import AppFooter from "./AppFooter/App-Footer.js";
import MainContent from "./Main-Content/MainContent";

import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app-main">
      <Navbar
        search={search}
        getSearch={getSearch}
        updateSearch={updateSearch}
      />
      <CarouselSlide />
      <MainContent />
      <div>
        <AppFooter />
      </div>
    </div>
  );
};

export default App;
