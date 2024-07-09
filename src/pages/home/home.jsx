import Hero from "../../components/hero/hero";
import ButtonBanner from "../../components/buttonBanner";
import BenefitCard from "../../components/card/card";
import benefitCardData from "../../data/benefitCardData";

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonBanner />
      <BenefitCard cardData={benefitCardData} />
    </div>
  );
};

export default Home;
