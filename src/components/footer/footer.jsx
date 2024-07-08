import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are committed to providing the best fitness experience. Our
              facilities and professional trainers are here to help you reach
              your fitness goals.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul>
              <li>Email: info@fitnessfirst.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Fitness St, Workout City</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
