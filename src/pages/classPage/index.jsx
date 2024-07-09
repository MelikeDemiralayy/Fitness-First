import Carousel from "react-bootstrap/Carousel";
import classData from "../../data/classData";
import "./index.css";

const ClassPage = () => {
  return (
    <Carousel>
      {classData.map((item, index) => (
        <Carousel.Item key={index} interval={1000 * (index + 1)}>
          <img
            className="d-block w-100"
            src={item.imageUrl}
            alt={item.title}
            style={{ height: "477px" }}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClassPage;
