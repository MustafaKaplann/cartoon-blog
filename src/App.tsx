import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Team from "./Components/Team";
import Gelenler from "./Components/Gelenler";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/sizdengelenler" element={<Gelenler />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
