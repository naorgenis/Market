import { useEffect, useState } from "react";
import Prodcut from "../Product/product";
import HttpService from "../Services/http-service";
import "./product-list.css";

const ProductList = ({ addToWishList, query }) => {
  const http = new HttpService();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(query);
  }, [query]);

  const getProducts = async (query) => {
    setIsLoading(true);
    const data = await http.getData(query);
    console.log(data);
    setProducts(data);
    console.log(products);

    setIsLoading(false);
  };

  const sortItem = (name) => {
    if (name === "price")
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    if (name === "title") {
      console.log(name);
      setProducts([
        ...products.sort((a, b) => {
          return a.title.localeCompare(b.title);
        }),
      ]);
      console.log(products);
    }
  };

  return (
    <div className="row product-list">
      <div>
        Sort:{" "}
        <span style={{ cursor: "pointer" }} onClick={() => sortItem("title")}>
          Name
        </span>{" "}
        |
        <span style={{ cursor: "pointer" }} onClick={() => sortItem("price")}>
          Price
        </span>
      </div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        products.map((item) => (
          <Prodcut
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            addToWishList={addToWishList}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
