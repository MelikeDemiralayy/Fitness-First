import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";

function ButtonBanner() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleBookTourClick = () => {
    navigate("/visit");
  };

  return (
    <div className="block-buttons-banner">
      <Row>
        <Col className="col-6 p-0 m-0">
          <div className="cw">
            <Button
              className="btn-chevron"
              title="Join"
              variant="danger"
              onClick={handleJoinClick}
            >
              <div className="btn-inner">
                <h3>Join now</h3>
                <p>No Joining Fee&nbsp;</p>
              </div>
            </Button>
          </div>
        </Col>
        <Col className="col-6 m-0 p-0">
          <div className="cw">
            <Button
              className="btn-chevron btn-secondary"
              title="Visit Us"
              onClick={handleBookTourClick}
            >
              <div className="btn-inner">
                <h3>Book a tour</h3>
                <p>Choose your nearest club</p>
              </div>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ButtonBanner;
