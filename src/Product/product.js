import "./product.css";
import parse from "html-react-parser";

const product = ({ id, title, image, description, price, addToWishList }) => {
  //   const addHandler = () => {
  //     localStorage.setItem("item", title);
  //   };
  // console.log(typeof description);
  //   const desc = parse(description);
  //   console.log(desc);

  return (
    <div className="card">
      <img src={image} className="card-img-top image" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-title">Price: {price}$</p>
        <a
          href="#"
          className="btn btn-primary "
          onClick={() => addToWishList({ id, title, image, price })}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default product;
