import { Row, Col, Button } from 'react-bootstrap';
import "./index.css";

function ButtonBanner() {
  return (
    <div className="block-buttons-banner">
      <Row>
        <Col className="col-6 p-0 m-0">
          <div className="cw">
            <Button href="/join" className="btn-chevron" title="Join" variant="danger">
              <div className="btn-inner">
                <h3>Join now</h3>
                <p>No Joining Fee&nbsp;</p>
              </div>
            </Button>
          </div>
        </Col>
        <Col className="col-6 m-0 p-0">
          <div className="cw">
            <Button href="/visit-us" className="btn-chevron btn-secondary" title="Visit Us">
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