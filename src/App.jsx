import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AllProjects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
