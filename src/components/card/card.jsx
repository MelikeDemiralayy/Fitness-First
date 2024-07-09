import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./card.css";

function BenefitCard({ cardData }) {
  if (!cardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="benefit-section">
      <Container>
        <Row className="gx-5">
          {cardData.map((card) => (
            <Col md={6} key={card.id}>
              <Card
                className="px-3 py-2"
                style={{ width: "660px", height: "650px" }}
              >
                <div className="card-img-container">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={card.imgSrc}
                    loading="lazy"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Link to={card.link}>
                    <Button variant="danger">{card.btnText}</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

BenefitCard.propTypes = {
  cardData: PropTypes.array.isRequired,
};

export default BenefitCard;
