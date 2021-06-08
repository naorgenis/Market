const CarouselSlide = () => {
  return (
    <div className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="shopImg3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="shopImg1.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
