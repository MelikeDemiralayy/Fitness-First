import { useNavigate } from "react-router-dom";
import "./index.css";
import CloseButton from "react-bootstrap/CloseButton";

function VisitUsPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="visit-us-container">
      <CloseButton
        aria-label="Close"
        className="close-button"
        onClick={handleClose}
      />
      <div className="visit-us-content">
        <h1>Book a tour</h1>
        <p>
          Come and experience our fantastic facilities and meet with our team of
          fitness experts for a personal tour of our club.
        </p>
        <p>
          Simply select your club and the most convenient time for you below and
          our team will be in touch.
        </p>
        <p>
          T&Cs apply. Over 18 s only. Proof of ID may be required. We reserve
          the right to refuse admission. Available at selected clubs only.
          Limited to 1 entry per 90 days. By booking you also agree to our
          Health Pledge and Gym Etiquette.
        </p>
      </div>
      <div className="info-section">
        <div className="container">
          <div className="row d-flex align-items-start">
            <div className="col-12">
              <div className="cw">
                <ul>
                  <li>
                    Book your appointment for the most convenient time and date
                    for you
                  </li>
                  <li>
                    Our club team will give you a personal tour of the club
                  </li>
                  <li>
                    Discuss your fitness goals and discover how Fitness First
                    can help achieve them
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitUsPage;
