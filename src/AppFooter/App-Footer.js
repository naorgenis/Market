import "./App-Footer.css";

const AppFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="back-to-top"
        style={{ cursor: "pointer" }}
        onClick={scrollToTop}
      >
        Back to the top
      </div>
      <footer className="app-footer">
        <div className="row">
          <div className="col-4">
            <h4>Market</h4>
            <ul>
              <li>about</li>
              <li>info</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="col-4">
            <h4>Market</h4>
            <ul>
              <li>about</li>
              <li>info</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="col-4">
            <h4>Market</h4>
            <ul>
              <li>about</li>
              <li>info</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
