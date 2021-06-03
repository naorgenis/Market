import { useEffect, useState } from "react";
import "./App.css";
import HttpService from "./Services/http-service";
import Prodcut from "./Product/product";
import Navbar from "./navbar";
import WishList from "./WishList/wishList";

const App = () => {
  const http = new HttpService();
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getProducts();
    getLocalStorage();
    console.log("app", wishlist);
  }, []);

  const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (!data) return;
    setWishlist(data);
  };

  const getProducts = async () => {
    const data = await http.getData();
    setProducts(data.items);
    // console.log(data.items.items.primaryOffer.listPrice);
    console.log(products);
  };

  // const getData = async () => {
  //   const res = await fetch(
  //     "https://walmart.p.rapidapi.com/products/list?cat_id=0&pref_store=2648%2C5434%2C2031%2C2280%2C5426&sort=best_seller&page=1&zipcode=94066",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "ca7552b293msh7d2dee9298ea89ep1cd17bjsn25ca2d1c6a85",
  //         "x-rapidapi-host": "walmart.p.rapidapi.com",
  //       },
  //     }
  //   );
  //   const data = await res.json();

  //   setProducts(data.items);
  //   console.log(products);
  // };

  const addToWishList = (item) => {
    if (!wishlist.some((i) => i.id === item.id)) {
      const newWish = [item, ...wishlist];
      setWishlist(newWish);
      localStorage.setItem("wishlist", JSON.stringify(newWish));
      console.log(wishlist);
    }
  };

  const deleteFromWishList = (id) => {
    const newWish = wishlist.filter((item) => item.id !== id);
    setWishlist(newWish);
    localStorage.setItem("wishlist", JSON.stringify(newWish));
    console.log(wishlist);
  };

  return (
    <div className="App-main">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {products.map((item) => (
                <Prodcut
                  key={item.productId}
                  id={item.productId}
                  title={item.title}
                  image={item.imageUrl}
                  description={item.description}
                  price={item.primaryOffer.offerPrice || 5}
                  addToWishList={addToWishList}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-4">
            <WishList wishlist={wishlist} onDelete={deleteFromWishList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
