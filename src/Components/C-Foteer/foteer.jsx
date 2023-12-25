/* eslint-disable react/no-unescaped-entities */
import "./foteer.css";

const Foteer = () => {
  return (
    <div className="foteer position-relative">
      <div className="boxe container-fluid text-center position-absolute">
        <div className="row footer">
          <div className="col">
            <p className="logo">Coffee-Time</p>
            <div className="social">
              <a href="https://github.com/IDRISSI-SOUFIANE">
                <i className="fa-brands fa-github" onClick={open}></i>
              </a>
              <a href="https://github.com/IDRISSI-SOUFIANE">
                <i className="fa-brands fa-linkedin-in" onClick={open}></i>
              </a>
              <a href="https://github.com/IDRISSI-SOUFIANE">
                <i className="fa-brands fa-whatsapp" onClick={open}></i>
              </a>
            </div>
          </div>

          <div className="col d-flex flex-column">
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
        <div className="signature">
          Created By <span style={{ color: "#64320e" }}>SOUFIANE IDRISSI </span>
        </div>
      </div>
    </div>
  );
};

export default Foteer;
