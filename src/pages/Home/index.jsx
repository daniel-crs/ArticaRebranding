import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Showcase from "../../components/Showcase";
import Service from "../../components/Service";
import InfoProject from "../../components/InfoProject";
import Project from "../../components/Project";
import Working from "../../components/Working";
import Budget from "../../components/Budget";
import AboutUs from "../../components/AboutUs";
import Doubts from "../../components/Doubts";

function Home() {
  return (
    <div>
      <Header />

      <Showcase />
      <Service />
      <InfoProject />
      <Project />
      <Working />
      <Budget />
      <AboutUs />
      <Doubts />

      <Footer />
    </div>
  );
}

export default Home;
