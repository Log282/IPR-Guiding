// import "./Mentor.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import BecomeMentor from "./pages/BecomeMentor";
import LiveWebinar from "./pages/LiveWebinar";

function App(){
  return(
    <div>
      <HomePage />
      <LiveWebinar />
      <BecomeMentor />
    </div>
  );
}

export default App;