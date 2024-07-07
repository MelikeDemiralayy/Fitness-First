import Card from 'react-bootstrap/Card';
import "./hero.css"
import heroData from '../../data/heroData';
function Hero() {
  return (
    <Card className="hero-card bg-dark text-white">
      <Card.Img className='card-img' src={heroData.imgSrc} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{heroData.title}</Card.Title>
        <Card.Text>{heroData.text}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Hero;