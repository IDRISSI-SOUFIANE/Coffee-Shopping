import "./foteer.css";

const Foteer = () => {
  return (
    <div className="foteer position-relative">
      <div className="boxe  container text-center">
        <div className="allBox position-absolute">
          <div className="row">
            <div className="col">
              <p className="logo">Coffee-Time</p>
              <div className="social">icon icon icon icon</div>
            </div>

            <div className="col d-flex  flex-column">
              <li>About</li>
              <li>Our Story</li>
              <li>FAQ</li>
              <li>Careers</li>
            </div>

            <div className="col d-flex  flex-column">
              <li>Customer's Recourses</li>
              <li>Menu</li>
              <li>Location</li>
              <li>Support</li>
            </div>

            <div className="col d-flex  flex-column">
              <li>Services</li>
              <li>Payement Options</li>
              <li>Refunds & Exchange</li>
              <li>Limilation Of Liability</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foteer;
