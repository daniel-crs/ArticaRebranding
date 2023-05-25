import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import Pesto from "./pages/AllProjects/projectsPages/Pesto";
import ClayPhone from "./pages/AllProjects/projectsPages/ClayPhone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AllProjects" element={<AllProjects />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/AllProjects/Pesto" element={<Pesto />} />
        <Route path="/AllProjects/ClayPhone" element={<ClayPhone />} />
      </Routes>
    </Router>
  );
}

export default App;
