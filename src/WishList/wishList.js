import "./wishList.css";
import ProductCondensed from "../Product-Condensed/product-condensed";

const wishList = ({ wishlist, onDelete }) => {
  return (
    <div className="sticky">
      <div className="card-block">
        <h4 className="card-title">Wish List</h4>
        <ul className="list-group">
          {wishlist.length !== 0
            ? wishlist.map((item) => (
                <ProductCondensed
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  onDelete={onDelete}
                />
              ))
            : "Your wishlist is empty"}
        </ul>
      </div>
    </div>
  );
};

export default wishList;
