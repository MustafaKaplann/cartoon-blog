
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Giveaways from "./Components/Giveaways";
import Team from "./Components/Team";


function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div>
     
      <Router>
        <Routes>
          
          <Route path="/" element={<Header />} />
          
          <Route path="/cekilis" element={<Giveaways />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      
 
    
    </div>
  );
}

export default App;
