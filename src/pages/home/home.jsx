import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/hero";
import ButtonBanner from "../../components/buttonBanner";
import BenefitCard from "../../components/card/card";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ButtonBanner/>
      <BenefitCard/>
    </div>
  );
}

export default Home;
