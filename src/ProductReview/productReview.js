import "./productReview.css";

const ProductReview = ({
  id,
  title,
  image,
  description,
  price,
  changeProRev,
}) => {
  return (
    <div className="modal">
      <div className="card mb-3 pro-rev">
        <span className="close" onClick={changeProRev}>
          &times;
        </span>

        <div className="row g-0">
          <div className="col-md-4">
            <img className="img-rev" src={image} alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body pro-rev">
              <h5
                className="card-title"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h5>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              <p className="card-text">
                <small className="text-muted">Price: {price}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
