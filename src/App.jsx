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
import DesktopPage from "./pages/AllProjects/projectsPages/DesktopPage";
import MobilePage from "./pages/AllProjects/projectsPages/MobilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AllProjects" element={<AllProjects />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/AllProjects/DesktopPage/:id" element={<DesktopPage />} />
        <Route path="/AllProjects/MobilePage/:id" element={<MobilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
