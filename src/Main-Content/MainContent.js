import { useEffect, useState } from "react";
import WishList from "../WishList/wishList";
import ProductList from "../ProductList/product-list";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import "./MainContent.css";

const MainContent = () => {
  const [wishlist, setWishlist] = useState([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (!data) return;
    setWishlist(data);
  };

  const addToWishList = (e, id, title, image, price) => {
    const item = { id, title, image, price };

    e.preventDefault();
    if (!wishlist.some((i) => i.id === item.id)) {
      showPopup();
      const newWish = [item, ...wishlist];
      setWishlist(newWish);
      localStorage.setItem("wishlist", JSON.stringify(newWish));
    }
  };

  const showPopup = () => {
    document.querySelector(".popup").style.display = "inline";
    setTimeout(() => {
      document.querySelector(".popup").style.display = "none";
    }, 4000);
  };

  const deleteFromWishList = (e, id) => {
    e.preventDefault();
    const newWish = wishlist.filter((item) => item.id !== id);

    setWishlist(newWish);
    localStorage.setItem("wishlist", JSON.stringify(newWish));
  };

  const expandProductList = () => {
    if (expand) document.querySelector(".product-list").style.height = "600px";
    else document.querySelector(".product-list").style.height = "auto";
    setExpand(!expand);
  };

  return (
    <div className="row containter">
      <div className="col-sm-8">
        <ProductList addToWishList={addToWishList} />

        <div className="expand" onClick={expandProductList}>
          {expand ? (
            <FiChevronsUp style={{ cursor: "pointer" }} />
          ) : (
            <FiChevronsDown style={{ cursor: "pointer" }} />
          )}
        </div>
      </div>
      <div className="col-sm-4">
        <div className="sticky">
          <WishList wishlist={wishlist} onDelete={deleteFromWishList} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
