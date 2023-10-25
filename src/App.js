// import "./Mentor.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BecomeMentor from "./pages/BecomeMentor";
import LiveWebinar from "./pages/LiveWebinar";

function App(){
  return(
    <div>
      <Router>
      <Routes>            
      <Route path="/" element={<HomePage />} />
      <Route path="/liveweb" element={<LiveWebinar />} />
      <Route path="/mentor" element={<BecomeMentor />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;