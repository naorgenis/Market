import "./carousel-slide.css";

const CarouselSlide = () => {
  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row carousel">
            <div className="col-md-3">
              <img src="1.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="2.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="3.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="7.jpg" className="d-block" alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row carousel">
            <div className="col-md-3">
              <img src="4.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="5.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="6.jpg" className="d-block" alt="..." />
            </div>
            <div className="col-md-3">
              <img src="8.jpg" className="d-block" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
