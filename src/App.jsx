import Cabecalho from "./components/Navbar";
import Showcase from "./components/Showcase";
import Service from "./components/Service";
import InfoProject from "./components/InfoProject";
import Project from "./components/Project";
import Working from "./components/Working";
import Budget from "./components/Budget";
import AboutUs from "./components/AboutUs";
import Doubts from "./components/Doubts";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.css";

function App() {
  return (
    <div>
      <Cabecalho />
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

export default App;
