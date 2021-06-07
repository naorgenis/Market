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
        className="card-img-top image"
        alt={title}
        onClick={() => setProdRev(true)}
      />
      <div className="card-body price">
        <p className="card-title">Price: {price}$</p>
      </div>
      <div className="card-body title">
        <h5
          className="card-title"
          dangerouslySetInnerHTML={{ __html: `${title.slice(0, 20)}...` }}
        ></h5>
      </div>
      <div className="add-btn">
        <a
          href="#"
          className="btn btn-primary addbtn"
          onClick={() => addToWishList({ id, title, image, price })}
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
        />
      )}
    </div>
  );
};

export default Product;
