import { useState } from "react";
import ProductReview from "../ProductReview/productReview";
import "./product.css";

const Product = ({ id, title, image, description, price, addToWishList }) => {
  const [prodRev, setProdRev] = useState(false);

  const changeProRev = () => {
    setProdRev(false);
    console.log(prodRev);
  };

  return (
    <div className="card">
      <img
        src={image}
        style={{ cursor: "pointer" }}
        className="card-img-top "
        alt={title}
        onClick={() => setProdRev(true)}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6>Price: {price}$</h6>
        <a
          href="#"
          className="btn btn-primary addbtn"
          onClick={(e) => addToWishList(e, id, title, image, price)}
        >
          Add to cart
        </a>
      </div>

      {!prodRev ? null : (
        <ProductReview
          id={id}
          title={title}
          image={image}
          description={description}
          price={price}
          changeProRev={changeProRev}
          addToWishList={addToWishList}
        />
      )}
    </div>
  );
};

export default Product;
