import "./productReview.css";

const ProductReview = ({
  id,
  title,
  image,
  description,
  price,
  changeProRev,
  addToWishList,
}) => {
  return (
    <div className="modal" onClick={changeProRev}>
      <div className="pro-rev">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="img-rev" src={image} alt={title} />
            </div>
            <div className="col-md-8">
              <span className="close" onClick={changeProRev}>
                &times;
              </span>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Price: <mark className="mark-price"> {price}$</mark>
                  </small>
                </p>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-primary addbtn"
              onClick={() => addToWishList({ id, title, image, price })}
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
