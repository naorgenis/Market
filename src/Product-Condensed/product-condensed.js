import "./product-condensed.css";

const productCondensed = ({ id, title, price, image, onDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-3">
          <a
            href="#"
            className="btn btn-outline-danger"
            onClick={(e) => onDelete(e, id)}
          >
            X
          </a>
        </div>
        <div className="col-sm-6 title">
          <h6>
            {title.slice(0, 10)} | {price}$
          </h6>
        </div>
        <div className="col-sm-3 image">
          <img src={image} className="card-img-top image-wish" alt={title} />
        </div>
      </div>
    </li>
  );
};

export default productCondensed;
