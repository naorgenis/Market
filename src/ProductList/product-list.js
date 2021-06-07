import { useEffect, useState } from "react";
import Prodcut from "../Product/product";
import HttpService from "../Services/http-service";
import "../App.css";

const ProductList = ({ addToWishList, query }) => {
  const http = new HttpService();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(query);
  }, [query]);

  const getProducts = async (query) => {
    const data = await http.getData(query);
    setProducts(data.items);
    console.log(products);
  };

  return (
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
  );
};

export default ProductList;
