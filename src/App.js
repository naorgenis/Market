import { useEffect, useState } from "react";
import Navbar from "./navbar";
import WishList from "./WishList/wishList";
import ProductList from "./ProductList/product-list";
import CarouselSlide from "./CarouselSlide/carousel-slide.js";
import "./App.css";

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (!data) return;
    setWishlist(data);
  };

  const addToWishList = (item) => {
    if (!wishlist.some((i) => i.id === item.id)) {
      const newWish = [item, ...wishlist];
      setWishlist(newWish);
      localStorage.setItem("wishlist", JSON.stringify(newWish));
    }
  };

  const deleteFromWishList = (e, id) => {
    e.preventDefault();
    const newWish = wishlist.filter((item) => item.id !== id);
    setWishlist(newWish);
    localStorage.setItem("wishlist", JSON.stringify(newWish));
  };

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
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <ProductList addToWishList={addToWishList} query={query} />
          </div>
        </div>
        <div className="col-sm-4">
          <WishList wishlist={wishlist} onDelete={deleteFromWishList} />
        </div>
      </div>
    </div>
  );
};

export default App;
